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
</script>

<style scoped>
/* Personaliza los estilos según sea necesario */
</style>
