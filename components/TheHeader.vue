<script setup>
import { ref } from "vue";
</script>

<template>
  <header class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-6">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <NuxtImg :src="'/Icon.png'" format="webp" height="50" alt="Type Chars Logo" />
          <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Type Chars</span> -->
        </NuxtLink>
        <ul class="flex flex-wrap items-center my-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <!-- <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li> -->
          <li>
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  &.spy-header {
    height: 60px;
    background: #58c7fa;
  }
}
</style>