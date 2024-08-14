<script setup lang="ts">
import { defineProps } from 'vue';

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

const props = defineProps<{
  doctor: Doctor;
}>();
</script>

<template>
  <div>
    <img
      :src="doctor.imageSrc"
      :alt="doctor.imageAlt"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">
        {{ doctor.name }}
      </h3>
      <p class="mt-2 text-gray-600">{{ doctor.specialty }}</p>
      <p class="mt-2 text-gray-600">{{ doctor.location }}</p>
      <p class="mt-2 text-gray-600">Rating: {{ doctor.rating }} ({{ doctor.reviewCount }} reviews)</p>
      <p class="mt-2 text-gray-600">Fee: {{ doctor.fee }}</p>
      <a
        :href="doctor.href"
        class="block mt-4 text-indigo-500 hover:underline"
      >
        Ver más detalles
      </a>
    </div>
  </div>
</template>

<style scoped></style>
