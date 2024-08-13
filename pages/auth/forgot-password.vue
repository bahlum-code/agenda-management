<script lang="ts" setup>
  async function forgotPassword(response:forgotPasswordResponse) {
    console.log("forgot-password-data", response);
    
  }
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <!-- AuthHeader-->
    <AuthHeader title="Forgot your password? asasas" />
    <!-- /.AuthHeader-->

    <!-- AuthForgotPasswordForm -->
    <AuthForgotPasswordForm @forgot-password="forgotPassword" />
    <!-- /.AuthForgotPasswordForm -->
  </div>
</template>
