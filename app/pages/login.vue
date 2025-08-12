<script setup lang="ts">
definePageMeta({
  auth: false,
});

interface loginOpts {
  label: string;
  type: string;
}

const { status, signIn } = useAuth();

const loginOptions: loginOpts[] = [
  {
    label: "Login with Email",
    type: "email",
  },
  {
    label: "Login with GitHub",
    type: "github",
  },
  {
    label: "Login with Google",
    type: "google",
  },
];
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-screen gap-2">
    <!-- Login options -->
    <div class="grid gap-4 items-center">
      <span class="w-full" v-for="login in loginOptions">
        <Button
          class="w-full"
          :label="login.label"
          @click="signIn(login.type)"
        />
      </span>
    </div>
  </div>
</template>
