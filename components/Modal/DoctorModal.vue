<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg max-w-lg w-full">
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

      <button @click="closeModal" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  doctor: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

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
