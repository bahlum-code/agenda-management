<script setup lang="ts">
async function handleLoginResponse(response: LoginResponse) {
  console.log("datos desde el hijo", response);
}
</script>
<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <!-- header login -->
    <AuthHeader title="Sign in to your account" />
    <!--/. header login  -->

    <!-- form login -->
    <AuthLoginForm @submit-login="handleLoginResponse" />
    <!--/. form login -->
  </div>
</template>
