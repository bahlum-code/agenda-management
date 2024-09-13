<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useRoute } from 'vue-router'
import { useSearchStore } from '~/store/searchStore'
import { storeToRefs } from "pinia";

const searchStore = useSearchStore();
const { getDoctors } = storeToRefs(searchStore);
const { searchDoctors } = searchStore;

{/* onMounted(() => {
  // searchDoctors('');
  doctors = searchDoctors('')
}); */}

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

const route = useRoute()
let query = 'All'
query = route.params.q
let doctors = searchStore.searchDoctors('')

const filteredDoctors = computed(() => {
  if (searchQuery.value) {
    // doctors.value.filter(
    //   (doctor) =>
    //     doctor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    //     doctor.specialty
    //       .toLowerCase()
    //       .includes(searchQuery.value.toLowerCase()) ||
    //     doctor.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    // )
    query = route.params.q
    doctors = searchStore.searchDoctors(query)
    // doctors = getDoctors
  }
  else {
    doctors = getDoctors
  }
  console.log(doctors)
  return doctors
}
);

const onSearch = (form: { searchQuery: string }) => {
  searchQuery.value = form.searchQuery;
};

definePageMeta({
  layout: "search",
});
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
     <!-- Header -->
    <LandingHeader/>
    <!-- SearchForm -->
    <SearchInput :doctorsCount="getDoctors.length" @search="onSearch" />
    <!-- Search Results -->
    <SearchResult :doctors="getDoctors" />
  </div>
</template>
