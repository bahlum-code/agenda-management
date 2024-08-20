<script setup lang="ts">
import { useDoctorsStore } from "~/store/doctors";
import { storeToRefs } from "pinia";

const doctorStore = useDoctorsStore();

const { getDoctors } = storeToRefs(doctorStore);

onMounted(() => {
  doctorStore.fetcAllhDoctors();

  setTimeout(() => {
    console.log("Doctors fetched:", getDoctors.value);
  }, 1000);
});

definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <!-- PageTitle -->
      <PageTitle
        title="My Doctors"
        description="Manage and view details of your doctors. You can see their specialties and contact information here."
      />
      <!-- /.PageTitle -->

      <div class="mt-16">
        <h2 class="sr-only">Doctors List</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="doctor in getDoctors"
              :key="doctor.id"
              class="border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <!-- DoctorInfo -->
              <DoctorInfo
                :id="doctor.id"
                :name="doctor.name"
                :specialty="doctor.specialty"
                :contact="doctor.contact"
                :contactEmail="doctor.contactEmail"
                :imageSrc="doctor.imageSrc"
              />
              <!-- /.DoctorInfo -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
