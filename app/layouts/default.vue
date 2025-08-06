<script setup lang="ts">
import { ref } from "vue";

const hasClicked = ref(false);
</script>
<template>
  <div class="w-full h-full dark:bg-black">
    <!-- Header -->
    <div class="p-4 border-b-[#3f3f46] border flex justify-between">
      <span class="flex justify-center items-center">
        <button @click="hasClicked = !hasClicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </span>
      <IconField class="h-full pr-0">
        <InputIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
          </svg>
        </InputIcon>
        <InputText size="small" placeholder="Search..." />
      </IconField>
    </div>
    <!-- Sidebar -->
    <SidebarComponent
      @is-redirecting="hasClicked = !hasClicked"
      :hasClicked="hasClicked"
    />

    <slot />
  </div>
</template>
