<script setup lang="ts">
import { ref, computed } from "vue";

const { status, data, signOut } = useAuth();

interface NavItems {
  name: string;
  link: string;
}

const props = defineProps({
  hasClicked: Boolean,
});

const navBarItems: NavItems[] = [
  {
    name: "Home",
    link: "/",
  },
];

const snippetRef = ref();
const teamsRef = ref();

const togglePopover = (event: unknown, type: string) => {
  switch (type) {
    case "snippets":
      snippetRef.value.toggle(event);
      break;
    case "teams":
      teamsRef.value.toggle(event);
    default:
      break;
  }
};

const snippetMenuItems: NavItems[] = [
  {
    name: "Your Snippets",
    link: "/snippets",
  },
  {
    name: "Create Snippets",
    link: "/snippets/create",
  },
];

const teamsMenuItems: NavItems[] = [
  {
    name: "Your Teams",
    link: "/teams",
  },
  {
    name: "Create or Join a Team",
    link: "/teams/list",
  },
];

// Safer computed property
const username = computed(() => {
  if (!data.value?.user?.name) return "User";
  return data.value.user.name;
});

// Add loading state check
const isLoading = computed(() => status.value === "loading");
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
      <Avatar
        v-if="!isLoading"
        shape="circle"
        size="normal"
        :label="username.charAt(0)"
      />
      <div v-else class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      <span>{{ username }}</span>
    </div>

    <Divider />

    <!-- Navigation Items -->
    <div class="flex flex-col w-full h-full">
      <div class="py-2" v-for="item in navBarItems" :key="item.name">
        <Button class="w-full" variant="outlined">
          <NuxtLink
            class="w-full flex justify-start"
            @click="$emit('isRedirecting')"
            :to="item.link"
          >
            {{ item.name }}
          </NuxtLink>
        </Button>
      </div>
      <!-- Snippets -->
      <div class="py-2">
        <Button
          @click="(e) => togglePopover(e, 'snippets')"
          class="w-full justify-start"
          variant="outlined"
        >
          Snippets
        </Button>
      </div>
      <Popover ref="snippetRef">
        <div class="py-2" v-for="item in snippetMenuItems" :key="item.name">
          <NuxtLink
            class="w-full flex"
            @click="
              () => {
                snippetRef.hide();
                $emit('isRedirecting');
              }
            "
            :to="item.link"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </Popover>
      <!-- Teams -->
      <div class="py-2">
        <Button
          @click="(e) => togglePopover(e, 'teams')"
          class="w-full justify-start"
          variant="outlined"
        >
          Teams
        </Button>
      </div>
      <Popover ref="teamsRef">
        <div class="py-2" v-for="item in teamsMenuItems" :key="item.name">
          <NuxtLink
            class="w-full flex"
            @click="
              () => {
                teamsRef.hide();
                $emit('isRedirecting');
              }
            "
            :to="item.link"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </Popover>
    </div>

    <!-- Login/Logout -->
    <div v-if="isLoading" class="w-full">
      <Button disabled class="w-full">Loading...</Button>
    </div>
    <div v-else-if="status === 'authenticated'" class="w-full">
      <Button @click="() => signOut()" class="w-full">Logout</Button>
    </div>
    <div v-else class="w-full">
      <Button
        @click="
          () => {
            $emit('isRedirecting');
            navigateTo('/login');
          }
        "
        class="w-full"
      >
        Log In
      </Button>
    </div>
  </div>
</template>
