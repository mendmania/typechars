<script setup>
</script>

<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <!-- <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          /> -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Type Chars</span>
        </NuxtLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NuxtLink to="/about" class="hover:underline me-4 md:me-6">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/" class="hover:underline me-4 md:me-6">Licensing</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/" class="hover:underline me-4 md:me-6">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles" class="hover:underline me-4 md:me-6">Articles</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
        <!-- <NuxtLink to="https://www.buymeacoffee.com/mendmania" class="cursor-pointer hover:underline">
          mendmania </NuxtLink>. -->
        Webmania.
        All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  &.spy-footer {
    height: 60px;
    background: #58c7fa;
  }
}
</style>