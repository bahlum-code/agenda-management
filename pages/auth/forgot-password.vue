<script lang="ts" setup>
import AuthHeader from "@/components/AuthHeader/index.vue";
import AuthForgotPasswordForm from "@/components/AuthForgotPasswordForm/index.vue";
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <!-- AuthHeader-->
    <AuthHeader title="Forgot your password? asasas" />
    <!-- /.AuthHeader-->

    <!-- AuthForgotPasswordForm -->
    <AuthForgotPasswordForm />
    <!-- /.AuthForgotPasswordForm -->
  </div>
</template>
