<script setup lang="ts">
import { ref } from "vue";
import SearchCard from "../SearchCard"

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

const doctors = ref<Doctor[]>([
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    location: "New York, NY",
    rating: 5,
    reviewCount: 38,
    imageSrc: "https://example.com/doctor1.jpg",
    imageAlt: "Dr. John Doe",
    fee: "$100",
    href: "#",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    rating: 4,
    reviewCount: 22,
    imageSrc: "https://example.com/doctor2.jpg",
    imageAlt: "Dr. Jane Smith",
    fee: "$150",
    href: "#",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    location: "Chicago, IL",
    rating: 4,
    reviewCount: 30,
    imageSrc: "https://example.com/doctor3.jpg",
    imageAlt: "Dr. Sarah Johnson",
    fee: "$120",
    href: "#",
  },
  // More doctors...
]);

</script>

<template>
  <!-- Search Results -->
  <section>
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Resultados de Búsqueda
        </h2>
        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <div
            v-for="doctor in doctors"
            :key="doctor.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <SearchCard :doctor="doctor"></SearchCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
