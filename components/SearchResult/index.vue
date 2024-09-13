<script setup lang="ts">
import DoctorModal from "../Modal/DoctorModal"

const isModalOpen = ref(false)  // Estado para controlar si la modal está abierta
const selectedDoctor = ref({})

const showDoctorDetails = (doctor) => {
  selectedDoctor.value = doctor
  isModalOpen.value = true
}
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

defineProps<{
  doctors: Doctor[];
}>();
</script>

<template>
  <!-- Search Results -->
  <section>
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          {{doctors.length}} Resultados de Búsqueda 
        </h2>
        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <div
            v-for="doctor in doctors"
            :key="doctor.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            @click="showDoctorDetails(doctor)"
          >
            <SearchCard :doctor="doctor" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <DoctorModal 
      :isOpen="isModalOpen" 
      :doctor="selectedDoctor" 
      @close="isModalOpen = false"
    />
</template>

<style scoped></style>
