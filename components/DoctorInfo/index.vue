<script setup lang="ts">
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";

const props = defineProps<{
  id: string;
  name: string;
  photo?: string;
  specialty: string;
  contact: string;
  contactEmail: string;
}>();

const optionsVisible = ref<string | null>(null);

const toggleOptions = (id: string) => {
  optionsVisible.value = optionsVisible.value === id ? null : id;
};

onMounted(() => {
  console.log("DoctorInfo mounted::", props.name);
});
</script>
<template>
  <div
    class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
  >
    <div class="flex-shrink-0">
      <img
        v-if="photo"
        :src="photo"
        :title="name"
        class="h-20 w-20 rounded-full object-cover"
      />
      <img
        v-else
        src="https://cdn-icons-png.flaticon.com/512/1021/1021799.png"
        class="h-20 w-20 rounded-full object-cover"
      />
    </div>
    <div class="ml-6 flex-1 text-sm">
      <div class="font-medium text-gray-900">{{ name }}</div>
      <p class="mt-1 text-gray-500">{{ specialty }}</p>
      <p class="mt-1 text-gray-500">Contact: {{ contact }}</p>
    </div>

    <div class="relative flex justify-end lg:hidden">
      <button
        class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
        @click="toggleOptions(id)"
      >
        <span class="sr-only">Options for doctor {{ name }}</span>
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
          v-if="optionsVisible === id"
          class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <a
              :href="'/doctors/' + id"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >View Details</a
            >
            <a
              :href="'mailto:' + contactEmail"
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
        :href="'/doctors/' + id"
        class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span>View Details</span>
        <span class="sr-only">{{ name }}</span>
      </a>
      <a
        :href="'mailto:' + contactEmail"
        class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span>Contact</span>
        <span class="sr-only">Dr. {{ name }}</span>
      </a>
    </div>
  </div>
</template>
