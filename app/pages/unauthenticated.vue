<script setup lang="ts">
definePageMeta({
  auth: false,
});

onMounted(() => {
  setTimeout(() => {
    navigateTo("/login");
  }, 2000);
});
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-screen gap-2">
    <span> You have not logged in. Redirecting you to login page... </span>
  </div>
</template>
