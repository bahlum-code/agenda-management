<script setup>
import SidebarNav from "~/components/SidebarNav/index.vue";
import TopBar from "~/components/TopBar/index.vue";

const userNavigation = [
  { name: "Your profile", href: "/account" },
  { name: "Sign out", href: "/" },
];
</script>
<template>
  <div>
    <!-- Sidebar -->
    <SidebarNav />
    <!-- /.Sidebar -->
    <div class="lg:pl-72">
      <!-- Top Bar -->
      <TopBar :userNavigation="userNavigation" />
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
