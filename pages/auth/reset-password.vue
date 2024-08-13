<script lang="ts" setup>
async function handleResetPassword(response:resetPasswordResponse) {
  console.log("reset-data",response);
}
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <!-- header reset password -->
    <AuthHeader title="Reset your password" />
    <!-- /.header reset password -->

    <!-- form reset password -->
    <AuthResetPasswordForm @reset-password="handleResetPassword" />
    <!--/. form reset password -->
  </div>
</template>
