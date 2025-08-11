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
];
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-screen gap-2">
    <!-- Login options -->
    <div class="grid gap-4 items-center">
      <Button
        v-for="login in loginOptions"
        :label="login.label"
        @click="signIn(login.type)"
      />
    </div>
  </div>
</template>
