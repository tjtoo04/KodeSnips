<script setup lang="ts">
import { useToast } from "primevue/usetoast";

definePageMeta({
  auth: false,
});

const toast = useToast();
const { status, data, signIn, getProviders } = useAuth();

const show = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "The toast is working!",
    life: 3000,
  });
};

// Optional: Get available providers for login buttons
const providers = await getProviders();
</script>

<template>
  <div class="h-screen w-full justify-center items-center">
    <!-- Loading State -->
    <div
      v-if="status === 'loading'"
      class="h-full w-full flex justify-center items-center"
    >
      <div class="text-2xl">Loading...</div>
    </div>

    <!-- Authenticated User Dashboard -->
    <div
      class="h-full w-full flex flex-col gap-6 p-8"
      v-else-if="status === 'authenticated' && data?.user"
    >
      <MainDashboard />
    </div>

    <!-- Unauthenticated User - Login Options -->
    <div
      v-else
      class="h-full w-full flex flex-col justify-center items-center gap-6"
    >
      <h1 class="text-5xl font-bold">Welcome to KodeSnips</h1>
      <p class="text-lg text-gray-600">
        Sign in to access your snippets and teams
      </p>

      <!-- Login Buttons -->
      <div class="flex flex-col gap-4 min-w-[300px]">
        <Button
          @click="() => signIn('github')"
          class="w-full flex items-center justify-center gap-2"
          severity="secondary"
        >
          <i class="pi pi-github"></i>
          Sign in with GitHub
        </Button>

        <Button
          @click="() => signIn('google')"
          class="w-full flex items-center justify-center gap-2"
          severity="secondary"
        >
          <i class="pi pi-google"></i>
          Sign in with Google
        </Button>
      </div>
    </div>
  </div>

  <!-- Debug Button -->
  <Button @click="show()" label="Show Toast" class="fixed bottom-4 right-4" />
</template>
