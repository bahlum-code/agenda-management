<script setup lang="ts">
import { defineProps } from 'vue';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  fee: string;
  href: string;
}

const props = defineProps<{
  doctor: Doctor;
}>();


function convertirHora(hora24) {
  // Dividir la hora en partes (horas, minutos, segundos)
  const [hora, minutos] = hora24.split(':');

  // Convertir la hora a formato 12 horas
  const hora12 = hora % 12 || 12;  // Si hora es 0 o 12, mostrar 12 en lugar de 0
  const periodo = hora < 12 ? 'AM' : 'PM';

  // Retornar la hora en formato 12 horas con AM/PM
  return `${hora12}:${minutos} ${periodo}`;
}
</script>

<template>
  <div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">
        {{ doctor.firstName }} {{ doctor.lastName }}
      </h3>
      <p class="mt-2 text-gray-600">{{ doctor.specialty }}</p>
      <p class="mt-2 text-gray-600">{{ doctor.clinicAddress }}</p>
      <p class="mt-2 text-gray-600">Teléfono: {{ doctor.phoneNumber }}</p>
      <p class="mt-2 text-gray-600">Costo de la cita: ${{ doctor.DoctorBillings[0].totalAmount }}</p>
      <p class="mt-2 text-gray-600">
        Horario:
        <div v-for="item in doctor.DoctorAvailabilities">
          {{ item.dayOfWeek }}, {{ convertirHora(item.startTime) }} - {{ convertirHora(item.endTime) }}
        </div>
      </p>
      <a
        :href="doctor.href"
        class="block mt-4 text-indigo-500 hover:underline"
      >
        Ver más detalles
      </a>
    </div>
  </div>
</template>

<style scoped></style>
