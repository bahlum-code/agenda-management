<script setup></script>

<template>
  <div>
    <div class="mt-32 sm:mt-56">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">
            Find the Right Specialist
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Search and Book Appointments Easily
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Quickly find the best doctors and specialists for your needs. Use
            our powerful search feature to filter by specialty, location, and
            availability. Book your appointments with confidence, knowing you're
            getting the right care.
          </p>
        </div>
      </div>

      <div class="relative overflow-hidden pt-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="App screenshot"
            class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width="2432"
            height="1442"
          />
          <div class="relative" aria-hidden="true">
            <div
              class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"
            />
          </div>
        </div>
      </div>
      <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-9"
          >
            <dt class="inline font-semibold text-gray-900">
              <component
                :is="feature.icon"
                class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            {{ " " }}
            <dd class="inline">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
