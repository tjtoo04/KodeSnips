<script setup lang="ts">
import { useToast } from "primevue/usetoast";
definePageMeta({
  auth: false,
});

const toast = useToast();

const show = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "The toast is working!",
    life: 3000,
  });
};
</script>

<template>
  <Button @click="show()" label="Show" />
</template>
