<script setup lang="ts">
import { defineProps } from "vue";

import { type DoctorSearch } from "@/utils/types/doctor-search";

const props = defineProps<{
  doctor: DoctorSearch;
  setIsOpen: (value: boolean) => void;
  setSelectedDoctor: (doctor: DoctorSearch) => void;
}>();

const openDialog = () => {
  props.setSelectedDoctor(props.doctor);
  props.setIsOpen(true);
};

const getRandomImage = () => {
  const randomImage = Math.floor(Math.random() * 100) + 1;

  return `https://picsum.photos/id/${randomImage}/300/300`;
};
</script>

<template>
  <div>
    <img
      :src="getRandomImage()"
      alt="default doctor image"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">
        {{ props.doctor.firstName }} {{ props.doctor.lastName }}
      </h3>
      <p class="mt-2 text-gray-600">{{ doctor.specialty }}</p>

      <a @click="openDialog" class="block mt-4 text-indigo-500 hover:underline">
        Ver más detalles
      </a>
    </div>
  </div>
</template>

<style scoped></style>
