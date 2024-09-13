<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useDoctorSearchStore } from "~/store/doctor-search";

const doctorSearchStore = useDoctorSearchStore();

const { getDoctorsSearch } = storeToRefs(doctorSearchStore);
const searchQuery = ref("");

const onSearch = (form: { searchQuery: string }) => {
  searchQuery.value = form.searchQuery;

  doctorSearchStore.search(form.searchQuery);
};
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <!-- Header -->
    <LandingHeader />
    <!-- SearchForm -->
    <SearchInput @search="onSearch" />
    <!-- Search Results -->
    <SearchResult :doctors="getDoctorsSearch" />
  </div>
</template>
