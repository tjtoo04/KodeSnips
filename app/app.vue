<script setup>
const route = useRoute();
watch(
  () => route.fullPath,
  (newPath) => {
    console.log("Route changed to:", newPath);
  },
);
</script>
<template>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in',
      }"
    />
    <Toast />
  </NuxtLayout>
</template>

<style></style>
