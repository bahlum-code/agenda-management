<script setup lang="ts">
import { ref, computed } from "vue";

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

const searchQuery = ref("");
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

const filteredDoctors = computed(() =>
  doctors.value.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      doctor.specialty
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const onSearch = (form: { searchQuery: string }) => {
  searchQuery.value = form.searchQuery;
};
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
     <!-- Header -->
    <LandingHeader/>
    <!-- SearchForm -->
    <SearchInput @search="onSearch" :doctorsCount="filteredDoctors.length" />
    <!-- Search Results -->
    <SearchResult :doctors="filteredDoctors" />
  </div>
</template>
