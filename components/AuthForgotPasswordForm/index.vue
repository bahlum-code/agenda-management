<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

type forgotProps = {
  email:string
}
const emit = defineEmits<{(e:'forgot-password', form:forgotProps):void}>()

const form = reactive({
  email:""
})
const rules = {
  email:{ required,email}
}
const v$ = useVuelidate(rules,form)

async function handleForgotPassword() {
  v$.value.$validate()
  v$.value.$touch()
  if(!v$.value.$invalid){
    console.log('enviando datos...');
    emit('forgot-password',form)
  }
}
</script>

<template>
  <!-- AuthForgotPasswordForm -->
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form
      class="space-y-6"
      action="#"
      method="POST"
      @submit.prevent="handleForgotPassword"
    >
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Email address</label
        >
        <div class="mt-2">
          <input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            @input="v$.email.$touch"
          >
        </div>
        <div v-if="v$.email.$error" class="text-red-500 text-xs mt-2">
          <p v-if="v$.email.$error">Formato no valido</p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Reset Link
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
  <!-- /.AuthForgotPasswordForm -->
</template>
