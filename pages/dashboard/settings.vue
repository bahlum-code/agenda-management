<script setup lang="ts">
import { ref } from "vue";

const isUser = ref(false); // Default to User Settings

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
            Settings
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Customize your account settings and preferences.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Account Settings</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <!-- Tabs for Switching between User and Medical Settings -->
            <div class="border-b border-gray-200">
              <nav class="flex space-x-4" aria-label="Tabs">
                <button
                  class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  :class="{
                    'border-indigo-500 text-indigo-600': isUser,
                    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
                      !isUser,
                  }"
                  @click="isUser = true"
                >
                  User Settings
                </button>
                <button
                  class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  :class="{
                    'border-indigo-500 text-indigo-600': !isUser,
                    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
                      isUser,
                  }"
                  @click="isUser = false"
                >
                  Medical Settings
                </button>
              </nav>
            </div>

            <!-- User Settings Section -->
            <div v-if="isUser">
              <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    User Profile
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Update your personal information and preferences.
                  </p>
                </div>
                <div class="border-t border-gray-200">
                  <form>
                    <div class="px-4 py-5 sm:px-6">
                      <div
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6"
                      >
                        <div class="sm:col-span-4">
                          <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Full Name</label
                          >
                          <input
                            id="name"
                            type="text"
                            name="name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                        <div class="sm:col-span-4">
                          <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                            >Email Address</label
                          >
                          <input
                            id="email"
                            type="email"
                            name="email"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                        <div class="sm:col-span-6">
                          <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                            >Change Password</label
                          >
                          <input
                            id="password"
                            type="password"
                            name="password"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Medical Settings Section -->
            <div v-else>
              <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Medical Profile
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Manage your professional details and settings.
                  </p>
                </div>
                <div class="border-t border-gray-200">
                  <form>
                    <div class="px-4 py-5 sm:px-6">
                      <div
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6"
                      >
                        <div class="sm:col-span-4">
                          <label
                            for="medical-id"
                            class="block text-sm font-medium text-gray-700"
                            >Medical ID</label
                          >
                          <input
                            id="medical-id"
                            type="text"
                            name="medical-id"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                        <div class="sm:col-span-4">
                          <label
                            for="specialty"
                            class="block text-sm font-medium text-gray-700"
                            >Specialty</label
                          >
                          <input
                            id="specialty"
                            type="text"
                            name="specialty"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                        <div class="sm:col-span-6">
                          <label
                            for="license"
                            class="block text-sm font-medium text-gray-700"
                            >Medical License</label
                          >
                          <input
                            id="license"
                            type="text"
                            name="license"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                        <div class="sm:col-span-6">
                          <label
                            for="clinic"
                            class="block text-sm font-medium text-gray-700"
                            >Clinic / Hospital</label
                          >
                          <input
                            id="clinic"
                            type="text"
                            name="clinic"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
