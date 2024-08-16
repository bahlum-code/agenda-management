<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import {required, sameAs, minLength}from "@vuelidate/validators"

type resetProps ={
  newPassword: string
  confirmPassword:string
}
const emit = defineEmits<{(e:'reset-password',form:resetProps):void}>()

const form = reactive<resetProps>({
  newPassword:"",
  confirmPassword:""
})

const rules = computed(()=>{
  return{
    newPassword:{required,minLength:minLength(6)},
    confirmPassword:{required,sameAsNewPassword:sameAs(form.newPassword)}
  }
})
const v$ = useVuelidate(rules, form)

const handleSubmit=()=>{
  v$.value.$validate()
  v$.value.$touch()
  if(!v$.value.$error){
    console.log('correcto-enviando datos...');
    emit('reset-password',form) 
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
          for="newPassword"
          class="block text-sm font-medium leading-6 text-gray-900"
          >New Password</label
        >
        <div class="mt-2">
          <input
            id="newPassword"
            v-model="form.newPassword"
            name="newPassword"
            type="password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            @input="v$.newPassword.$touch"
          >
        </div>

        <div v-if="v$.newPassword.$error" class="text-red-500 text-xs mt-2">
          <p v-if="v$.newPassword.minLength.$invalid">Password must be at least 6 characters long</p>
        </div>
   
      </div>

      <div>
        <label
          for="confirmPassword"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Confirm Password</label
        >
        <div class="mt-2">
          <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            name="confirmPassword"
            type="password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
        </div>
        <div v-if="v$.confirmPassword.$error" class="text-red-500 text-xs mt-2">
          <p v-if="v$.confirmPassword.sameAsNewPassword.$invalid">Passwords must match</p>
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
