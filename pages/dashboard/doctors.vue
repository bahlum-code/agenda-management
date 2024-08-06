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
    imageSrc: "https://example.com/image1.jpg",
  },
  {
    id: "DOC002",
    name: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    contact: "555-5678",
    contactEmail: "emily.johnson@example.com",
    imageSrc: "https://example.com/image2.jpg",
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
      <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            My Doctors
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Manage and view details of your doctors. You can see their
            specialties and contact information here.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Doctors List</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="doctor in doctors"
              :key="doctor.id"
              class="border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <div
                class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
              >
                <div class="flex-shrink-0">
                  <img
                    :src="doctor.imageSrc"
                    :alt="doctor.name"
                    class="h-20 w-20 rounded-full object-cover"
                  />
                </div>
                <div class="ml-6 flex-1 text-sm">
                  <div class="font-medium text-gray-900">{{ doctor.name }}</div>
                  <p class="mt-1 text-gray-500">{{ doctor.specialty }}</p>
                  <p class="mt-1 text-gray-500">
                    Contact: {{ doctor.contact }}
                  </p>
                </div>

                <div class="relative flex justify-end lg:hidden">
                  <button
                    class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                    @click="toggleOptions(doctor.id)"
                  >
                    <span class="sr-only"
                      >Options for doctor {{ doctor.name }}</span
                    >
                    <EllipsisVerticalIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-if="optionsVisible === doctor.id"
                      class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div class="py-1">
                        <a
                          :href="'/doctors/' + doctor.id"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >View Details</a
                        >
                        <a
                          :href="'mailto:' + doctor.contactEmail"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >Contact</a
                        >
                      </div>
                    </div>
                  </transition>
                </div>

                <div
                  class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"
                >
                  <a
                    :href="'/doctors/' + doctor.id"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Details</span>
                    <span class="sr-only">{{ doctor.name }}</span>
                  </a>
                  <a
                    :href="'mailto:' + doctor.contactEmail"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>Contact</span>
                    <span class="sr-only">Dr. {{ doctor.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
