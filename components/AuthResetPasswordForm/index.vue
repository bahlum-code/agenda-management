<script setup lang="ts">
const emit = defineEmits(["reset-password"]);
const newPassword = ref();
const confirmPassword = ref();

async function handleSubmit() {
  try {
    const response = await fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newPassword: newPassword.value, confirmPassword: confirmPassword.value })
    });
    const data = await response.json()
    emit('reset-password', { status:"ok", data})
    
  } catch (error) {
    emit('reset-password',{ status:"fail", error})
  }
}
</script>
<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form
      class="space-y-6"
      action="#"
      method="POST"
      @submit.prevent="handleSubmit"
    >
      <div>
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-gray-900"
          >New Password</label
        >
        <div class="mt-2">
          <input
            id="password"
            v-model="newPassword"
            name="password"
            type="password"
            autocomplete="new-password"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
        </div>
      </div>

      <div>
        <label
          for="password-confirm"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Confirm Password</label
        >
        <div class="mt-2">
          <input
            id="password-confirm"
            v-model="confirmPassword"
            name="password-confirm"
            type="password"
            autocomplete="new-password"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reset Password
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Remembered your password?
      <NuxtLink
        to="/auth/login"
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >Sign in</NuxtLink
      >
    </p>
  </div>
</template>
