<script setup lang="ts">
import { ref, computed } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";

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

const navigation = [
  { name: "Services", href: "#" },
  { name: "Features", href: "#" },
  { name: "Faq", href: "#" },
  { name: "Contact", href: "#" },
];

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
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <!-- Header -->
    <header class="relative bg-transparent z-50">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm font-semibold leading-6 text-white"
              >{{ item.name }}</a
            >
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Nuxt-link
              to="/auth/login"
              class="text-sm font-semibold leading-6 text-white"
              >Log in <span aria-hidden="true">&rarr;</span></Nuxt-link
            >
          </div>
        </nav>
        <Dialog
          class="lg:hidden"
          :open="mobileMenuOpen"
          @close="mobileMenuOpen = false"
        >
          <div class="fixed inset-0 z-50" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
                <div class="py-6">
                  <NuxtLink
                    to="/auth/login"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Log in</NuxtLink
                  >
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </header>

    <!-- Search Section -->
    <section class="relative">
      <div class="relative bg-gray-900">
        <!-- Background image and gradient -->
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="Background image"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
        </div>

        <!-- Content -->
        <div
          class="relative z-10 flex items-center justify-center min-h-screen py-12 px-6 lg:px-8"
        >
          <div class="text-center">
            <h1 class="text-4xl font-bold text-white sm:text-6xl">
              Encuentra a tu especialista ideal
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              Usa nuestro buscador para encontrar rápidamente a los mejores
              médicos y especialistas según tus necesidades.
            </p>
            <div class="mt-6">
              <input
                type="text"
                placeholder="Buscar por especialidad, ubicación..."
                class="block w-full px-4 py-2 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button
                class="mt-4 inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

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
              <img
                :src="doctor.image"
                alt="Doctor's photo"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ doctor.name }}
                </h3>
                <p class="mt-2 text-gray-600">{{ doctor.specialty }}</p>
                <p class="mt-2 text-gray-600">{{ doctor.location }}</p>
                <a
                  :href="`/doctor/${doctor.id}`"
                  class="block mt-4 text-indigo-500 hover:underline"
                >
                  Ver más detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative bg-gray-900">
      <!-- Include your footer code here -->
    </footer>
  </div>
</template>
