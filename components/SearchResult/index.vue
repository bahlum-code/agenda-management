<script setup lang="ts">
import { type DoctorSearch } from "@/utils/types/doctor-search";

defineProps<{
  doctors: DoctorSearch[];
}>();

const isOpen = ref(false);
const selectedDoctor = ref<DoctorSearch | null>(null);

function setIsOpen(value: boolean) {
  isOpen.value = value;
}

function setSelectedDoctor(doctor: DoctorSearch | null) {
  selectedDoctor.value = doctor;
}
</script>

<template>
  <!-- Search Results -->
  <section id="search-results">
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Resultados de Búsqueda ({{ doctors.length }})
        </h2>
        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <div
            v-for="doctor in doctors"
            :key="doctor.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <SearchCard
              :doctor="doctor"
              :set-is-open="setIsOpen"
              :set-selected-doctor="setSelectedDoctor"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <SearchDoctorDetails
    :doctor="selectedDoctor"
    :is-open="isOpen"
    :set-is-open="setIsOpen"
    :set-selected-doctor="setSelectedDoctor"
  />
</template>

<style scoped></style>
