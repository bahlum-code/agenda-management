<script setup lang="ts">
    const props = defineProps<{
        title: string;
        description: string;
    }>();
</script>
<template>
    <!-- PageTitle -->
    <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ props.title }}
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            {{ props.description }}
          </p>
        </div>
      </div>
      <!-- /.PageTitle -->
</template>
