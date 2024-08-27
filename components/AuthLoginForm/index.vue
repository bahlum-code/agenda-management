<script setup lang="ts">
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

type LoginProps = {
  email: string;
  password: string;
};

const emit = defineEmits<{ (e: "submit-login", form: LoginProps): void }>();

const form = reactive<LoginProps>({
  email: "",
  password: "",
});

const isLogin = ref(false);

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};
const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  v$.value.$validate();
  v$.value.$touch();
  if (!v$.value.$invalid) {
    isLogin.value = true;
    emit("submit-login", form);
  }
}
</script>
<template>
  <div v-if="!isLogin">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        action="#"
        method="POST"
        @submit.prevent="handleSubmit"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mt-2">
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <p v-if="v$.email.$error" class="text-red-500 text-xs mt-2">
              <span v-if="!v$.email.required">This field is required</span>
              <span v-if="v$.email.$error">Please enter a valid email</span>
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="text-sm">
              <NuxtLink
                to="/auth/forgot-password"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </NuxtLink>
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <p v-if="v$.password.$error" class="text-red-500 text-xs mt-2">
              <span v-if="!v$.password.required">This field is required</span>
              <span v-if="v$.password.$error">
                Password must be at least 6 characters long
              </span>
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            role="button"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
          <p v-if="v$.$error" class="text-red-500 text-sm mt-2 text-center">
            Please correct the errors before submitting.
          </p>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ " " }}
        <a
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
  <div v-else>
    <p id="welcome-message" role="alert-success">Welcome Gonzalo!</p>
  </div>
</template>
