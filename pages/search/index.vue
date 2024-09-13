<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useRoute } from 'vue-router'
import { useSearchStore } from '~/store/searchStore'
import { storeToRefs } from "pinia";

const searchStore = useSearchStore();
const { getDoctors } = storeToRefs(searchStore);
const { searchDoctors } = searchStore;

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
