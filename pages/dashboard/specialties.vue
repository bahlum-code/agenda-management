<script setup lang="ts">
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";

import { useSpecialtyStore } from "~/store/specialties.js";
import { storeToRefs } from "pinia";

//const doctorStore = useDoctorsStore();
//const { getDoctors } = storeToRefs(doctorStore);
//const { fetcAllhDoctors } = doctorStore;
//const { getSpecialties } = storeToRefs(specialtiesStore)

const specialtiesStore = useSpecialtyStore()
const {getEspecialties} = storeToRefs(specialtiesStore)
const { fetchAllSpecialities } = specialtiesStore

onMounted(() => {
  fetchAllSpecialities();
});

// interface Specialty {
//   id: string;
//   name: string;
//   description: string;
//   imageSrc: string;
// }

// const specialties: Specialty[] = [
//   {
//     id: "SPEC001",
//     name: "Cardiology",
//     description:
//       "The study and treatment of heart conditions. Cardiologists diagnose and treat conditions such as coronary artery disease and heart rhythm disorders.",
//     imageSrc: "https://example.com/image1.jpg",
//   },
//   {
//     id: "SPEC002",
//     name: "Dermatology",
//     description:
//       "The branch of medicine dealing with the skin, nails, and hair. Dermatologists treat conditions like acne, eczema, and skin cancer.",
//     imageSrc: "https://example.com/image2.jpg",
//   },
//   // More specialties...
// ];

// const optionsVisible = ref<string | null>(null);

// function toggleOptions(id: string) {
//   optionsVisible.value = optionsVisible.value === id ? null : id;
// }
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <!-- PageTitle -->
      <PageTitle
        title="My Specialties"
        description="Manage and view details of your medical specialties. Discover and track the specialties relevant to your health care."
      />
      <!-- /.PageTitle -->

      <div class="mt-16">
        <h2 class="sr-only">Specialties List</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="specialty in getEspecialties"
              :key="specialty.id"
              class="border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <div
                class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
              >
                <div class="flex-shrink-0">
                  <Icon name="clarity:assign-user-line" class="text-9xl" />
                </div>
                <div class="ml-6 flex-1 text-sm">
                  <div class="font-medium text-gray-900">
                    {{ specialty.specialtyName }}

                  </div>
                  <p class="mt-1 text-gray-500">{{ specialty.specialtyDescription }}</p>
                </div>

                <div class="relative flex justify-end lg:hidden">
                  <button
                    class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                    
                  >
                    <span class="sr-only"
                      >Options for specialty {{ specialty.specialtyName }}</span
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
                      v-if="true"
                      class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div class="py-1">
                        <a
                          :href="'/specialties/' + specialty.id"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >View Details</a
                        >
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >Edit</a
                        >
                      </div>
                    </div>
                  </transition>
                </div>

                <div
                  class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"
                >
                  <a
                    :href="'/specialties/' + specialty.id"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Details</span>
                    <span class="sr-only">{{ specialty.specialtyName }}</span>
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>Edit</span>
                    <span class="sr-only">{{ specialty.specialtyName }}</span>
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
