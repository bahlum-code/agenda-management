<script setup lang="ts">
const props = defineProps<{
  doctor: DoctorSearch | null;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setSelectedDoctor: (doctor: DoctorSearch) => void;
}>();

// Ideally use a library like dayjs or date-fns
const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":");
  const period = +hours >= 12 ? "PM" : "AM";
  const formattedHours = +hours % 12 || 12;
  return `${formattedHours}:${minutes} ${period}`;
};
</script>

<template>
  <Dialog
    v-if="props.isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center"
    :open="props.isOpen"
    @close="props.setIsOpen"
  >
    <div class="fixed inset-0 bg-black bg-opacity-50" />
    <!-- Background overlay -->

    <DialogPanel
      class="relative bg-white rounded-lg shadow-xl p-6 w-[450px] mx-auto"
    >
      <img
        class="w-full h-36 mb-4 object-contain"
        src="https://i.ibb.co/4Mr5Lx0/DALL-E-2024-09-12-22-18-52-A-simple-clean-black-and-white-line-drawing-of-a-doctor-wearing-a-stethos.webp"
        alt="default doctor image"
      />
      <DialogTitle class="text-xl font-bold mb-4">
        Dr {{ props.doctor?.firstName }} {{ props.doctor?.lastName }}
      </DialogTitle>

      <DialogDescription class="text-lg mb-6">
        <p>{{ props.doctor?.specialty }}</p>
      </DialogDescription>

      <p class="text-lg">
        <strong>Dirección:</strong>
        {{ props.doctor?.clinicAddress }}
      </p>

      <p class="text-lg">
        <strong>Teléfono:</strong>
        {{ props.doctor?.phoneNumber }}
      </p>

      <p class="text-lg mb-4">
        <strong>Costo de la cita:</strong>
        ${{ props.doctor?.doctorBilling[0].totalAmount }}
      </p>

      <p class="text-lg text-center font-bold">Horario de atención</p>

      <table class="w-full mb-5 table-auto text-left border-collapse">
        <thead>
          <tr>
            <th class="border-b-2 p-4">Día</th>
            <th class="border-b-2 p-4">Desde</th>
            <th class="border-b-2 p-4">Hasta</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in props.doctor?.doctorAvailability"
            :key="index"
            class="border-t"
          >
            <td class="p-4">{{ item.dayOfWeek }}</td>
            <td class="p-4">{{ formatTime(item.startTime) }}</td>
            <td class="p-4">{{ formatTime(item.endTime) }}</td>
          </tr>
          <tr v-if="!props.doctor?.doctorAvailability.length">
            <td class="p-4" colspan="3">No hay horarios disponibles</td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-end space-x-4">
        <button
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
          @click="props.setIsOpen(false)"
        >
          Cerrar
        </button>
      </div>
    </DialogPanel>
  </Dialog>
</template>
