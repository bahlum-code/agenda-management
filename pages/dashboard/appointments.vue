<script setup lang="ts">
import { ref } from "vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { useAppointmentStore } from "~/store/appoinments";
import { storeToRefs } from "pinia";

const appointmentStore = useAppointmentStore();

const { getAppointments } = storeToRefs(appointmentStore);

onMounted(() => {
  appointmentStore.fetchAllAppointments();

  setTimeout(() => {
    console.log("Appointments fetched:", getAppointments.value);
  }, 1000);
});



const optionsVisible = ref<string | null>(null);

function toggleOptions(id: string) {
  optionsVisible.value = optionsVisible.value === id ? null : id;
}

function cancelAppointment(id: string) {
  // Implement the cancel functionality here
  console.log(`Canceling appointment ${id}`);
}
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <!-- PageTitle -->
      <PageTitle
        title="My Appointments"
        description="Manage your upcoming appointments, view details, or cancel them as needed."
      />
      <!-- /.PageTitle -->

      <div class="mt-16">
        <h2 class="sr-only">Upcoming Appointments</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="appointment in getAppointments"
              :key="appointment.id"
              class="border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <h3 class="sr-only">
                Appointment scheduled on
                <time :datetime="appointment.dateTime">{{
                  appointment.date
                }}</time>
              </h3>

              <div
                class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
              >
                <dl
                  class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
                >
                  <div>
                    <dt class="font-medium text-gray-900">Appointment ID</dt>
                    <dd class="mt-1 text-gray-500">{{ appointment.id }}</dd>
                  </div>
                  <div class="hidden sm:block">
                    <dt class="font-medium text-gray-900">Date & Time</dt>
                    <dd class="mt-1 text-gray-500">
                      <time :datetime="appointment.dateTime">{{
                        appointment.appointmentDate
                      }}</time>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Doctor</dt>
                    <dd class="mt-1 text-gray-500">{{ appointment.doctorId }}</dd>
                  </div>
                </dl>

                <div class="relative flex justify-end lg:hidden">
                  <button
                    class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                    @click="toggleOptions(appointment.id)"
                  >
                    <span class="sr-only"
                      >Options for appointment {{ appointment.id }}</span
                    >
                    <EllipsisVerticalIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-if="optionsVisible === appointment.id"
                      class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div class="py-1">
                        <a
                          :href="'/appointments/' + appointment.id"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >View Details</a
                        >
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >Cancel Appointment</a
                        >
                      </div>
                    </div>
                  </transition>
                </div>

                <div
                  class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"
                >
                  <a
                    :href="'/appointments/' + appointment.id"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Details</span>
                    <span class="sr-only">{{ appointment.id }}</span>
                  </a>
                  <button
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    @click="cancelAppointment(appointment.id)"
                  >
                    <span>Cancel Appointment</span>
                    <span class="sr-only"
                      >for appointment {{ appointment.id }}</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
