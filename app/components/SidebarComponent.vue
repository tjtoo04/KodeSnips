<script setup lang="ts">
import { ref, computed } from "vue";
const {
  status,
  data,
  lastRefreshedAt,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut,
} = useAuth();

interface navItems {
  name: string;
  link: string;
}
const props = defineProps({
  hasClicked: Boolean,
});

const navBarItems: navItems[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Snippets",
    link: "/snippets",
  },
];

const triggerSignIn = async (type: string) => {
  await signIn(type);
};
</script>

<template>
  <div
    :class="[
      'dark:bg-black bg-white border border-default rounded-md justify-between h-3/4 w-1/5 fixed left-0 top-1/2 -translate-y-1/2 flex flex-col transition-all duration-300 ease-in-out z-50 p-4',
      props.hasClicked
        ? 'translate-x-[15px] opacity-100 pointer-events-auto'
        : '-translate-x-full opacity-0 pointer-events-none',
    ]"
  >
    <!-- Profile -->
    <div class="flex gap-2 items-center pt-2">
      <Avatar shape="circle" size="normal" label="T" />
      <span> Name </span>
    </div>

    <Divider />

    <!-- Navigation Items -->
    <div class="flex flex-col w-full h-full">
      <div class="py-3" v-for="item in navBarItems">
        <NuxtLink class="" @click="$emit('isRedirecting')" :to="item.link">{{
          item.name
        }}</NuxtLink>
      </div>
    </div>
    <!-- Login/Logout -->
    <div v-if="status == 'authenticated'" class="w-full">
      <Button @click="() => signOut()" class="w-full">Logout</Button>
    </div>
    <div v-else class="w-full">
      <Button @click="triggerSignIn('github')" class="w-full"
        >Login with GitHub</Button
      >
    </div>
  </div>
</template>

<style scoped></style>
