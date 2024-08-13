<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <!-- AuthHeader-->
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <NuxtLink to="/">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </NuxtLink>

    <h2
      class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
    >
      {{ props.title }}
    </h2>
  </div>
  <!-- /.AuthHeader-->
</template>
