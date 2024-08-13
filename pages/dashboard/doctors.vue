<script setup lang="ts">
import { ref } from "vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  contact: string;
  contactEmail: string;
  imageSrc: string;
}

const doctors: Doctor[] = [
  {
    id: "DOC001",
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    contact: "555-1234",
    contactEmail: "john.smith@example.com",
    imageSrc: "",
  },
  {
    id: "DOC002",
    name: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    contact: "555-5678",
    contactEmail: "emily.johnson@example.com",
    imageSrc: "",
  },
  // More doctors...
];

const optionsVisible = ref<string | null>(null);

function toggleOptions(id: string) {
  optionsVisible.value = optionsVisible.value === id ? null : id;
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
        title="Mis doctores" 
        description="Manage and view details of your doctors. You can see their specialties and contact information here."
      />
      <!-- /.PageTitle -->

      <div class="mt-16">
        <h2 class="sr-only">Doctors List</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
            v-for="doctor in doctors"
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
