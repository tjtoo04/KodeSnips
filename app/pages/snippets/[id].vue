<script setup>
definePageMeta({
  auth: true,
});

const router = useRoute();

console.log(router.params);
</script>

<template>
  <div>Hello World!</div>
</template>
