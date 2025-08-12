<script setup lang="ts">
import { useToast } from "primevue/usetoast";

// Dashboard doesn't need auth: false since it requires authentication
const toast = useToast();
const { status, data, signOut } = useAuth();

const show = () => {
  toast.add({
    severity: "success",
    summary: "Login Successful!",
    detail: "Welcome to your dashboard!",
    life: 3000,
  });
};

// Show success toast on mount
onMounted(() => {
  if (status.value === "authenticated") {
    show();
  }
});
</script>

<template>
  <div class="h-screen w-full">
    <!-- Loading State -->
    <div
      v-if="status === 'loading'"
      class="h-full w-full flex justify-center items-center"
    >
      <div class="text-2xl">Loading dashboard...</div>
    </div>

    <!-- Authenticated User Dashboard -->
    <div
      v-else-if="status === 'authenticated' && data?.user"
      class="h-full w-full flex flex-col gap-6 p-8"
    >
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-5xl">Welcome {{ data.user.name }}!</h1>
        <Button @click="() => signOut()" severity="secondary">
          Sign Out
        </Button>
      </div>

      <div class="text-lg text-green-600">
        🎉 OAuth login successful! You are now authenticated.
      </div>

      <!-- Main Content -->
      <div class="flex w-full border border-default rounded-md p-4">
        <!-- Teams -->
        <div class="flex flex-col w-full h-full gap-2">
          <h3 class="text-3xl underline underline-offset-8">Your teams</h3>
          <div class="text-gray-600">You don't have a team now.</div>
        </div>
        <!-- Snippets -->
        <div class="flex flex-col w-full h-full gap-2">
          <h3 class="text-3xl underline underline-offset-8">Your snippets</h3>
          <div class="text-gray-600">You don't have any snippets.</div>
          <Button @click="() => navigateTo('/snippets')" class="mt-4">
            Create Your First Snippet
          </Button>
        </div>
      </div>

      <!-- User Info Debug -->
      <!-- <div class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md"> -->
      <!--   <h4 class="font-bold mb-2">Debug Info:</h4> -->
      <!--   <p><strong>Name:</strong> {{ data.user.name }}</p> -->
      <!--   <p><strong>Email:</strong> {{ data.user.email }}</p> -->
      <!--   <p><strong>Auth Status:</strong> {{ status }}</p> -->
      <!-- </div> -->
    </div>

    <!-- Fallback for unauthenticated (shouldn't happen due to middleware) -->
    <div v-else class="h-full w-full flex justify-center items-center">
      <div class="text-center">
        <h1 class="text-2xl mb-4">Access Denied</h1>
        <Button @click="() => navigateTo('/login')">Go to Login</Button>
      </div>
    </div>
  </div>
</template>
