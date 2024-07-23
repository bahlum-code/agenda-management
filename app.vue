<script setup lang="ts">
import { provideUseId as provideHeadlessUseId } from "@headlessui/vue";
// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId());
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
