<script setup>
import Sidebar from "~/components/sidebar/index.vue";
</script>
<template>
  <div>
    <!-- Sidebar -->
    <Sidebar />
    <!-- /.Sidebar -->
    <div class="lg:pl-72">
      <!-- Top Bar -->
      <div class="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8" />
      <!-- /.Top Bar -->

      <!-- Page Content -->
      <main class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
      <!-- Page Content -->
    </div>
  </div>
</template>
