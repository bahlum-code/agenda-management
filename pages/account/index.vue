<script setup>
import { ref } from "vue";

const profile = ref({
  name: "Dr. Jane Doe",
  email: "jane.doe@example.com",
  specialty: "Cardiology",
  medicalId: "123456789",
  license: "ABC-123456",
  clinic: "Heart Clinic",
  bio: "Experienced cardiologist with over 20 years of experience.",
  picture: "https://via.placeholder.com/150",
});

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profile.value.picture = e.target.result;
    };
    reader.readAsDataURL(file);
  }
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
            Medical Profile
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            View and update your professional information.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Profile Details</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <!-- Profile Information -->
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Profile Information
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  Update your profile details below.
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
                          v-model="profile.name"
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
                          v-model="profile.email"
                          type="email"
                          name="email"
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
                          v-model="profile.specialty"
                          type="text"
                          name="specialty"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div class="sm:col-span-4">
                        <label
                          for="medical-id"
                          class="block text-sm font-medium text-gray-700"
                          >Medical ID</label
                        >
                        <input
                          id="medical-id"
                          v-model="profile.medicalId"
                          type="text"
                          name="medical-id"
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
                          v-model="profile.license"
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
                          v-model="profile.clinic"
                          type="text"
                          name="clinic"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="bio"
                          class="block text-sm font-medium text-gray-700"
                          >Biography</label
                        >
                        <textarea
                          id="bio"
                          v-model="profile.bio"
                          name="bio"
                          rows="3"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                        <p class="mt-2 text-sm text-gray-500">
                          A brief biography to introduce yourself to patients.
                        </p>
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

            <!-- Profile Picture Section -->
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Profile Picture
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  Upload a profile picture to represent yourself.
                </p>
              </div>
              <div class="border-t border-gray-200">
                <form>
                  <div class="px-4 py-5 sm:px-6">
                    <div class="flex items-center space-x-4">
                      <img
                        :src="profile.picture"
                        alt="Profile Picture"
                        class="h-24 w-24 rounded-full object-cover"
                      />
                      <input
                        id="profile-picture"
                        type="file"
                        name="profile-picture"
                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                        @change="handleFileChange"
                      />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Select a new profile picture to upload.
                    </p>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Upload Picture
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
</template>

<style scoped>
/* Add custom styles if needed */
</style>
