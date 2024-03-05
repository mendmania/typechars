<script setup>
import { useModalStore } from './stores/modal'
import { storeToRefs } from 'pinia';

const modalStore = useModalStore()

const { data, showModal, active } = storeToRefs(modalStore)

onServerPrefetch(async () => {
  useHead({
    bodyAttrs: {
      class: "bg-gray-300 dark:bg-gray-800",
    },
    script: [
      {
        innerHTML: `if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }`,
        type: "text/javascript",
      },
    ],
  });

});

useHead({
  title: "Type Chars - Master Typing Speed",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Type Chars is your ultimate platform to practice and enhance your typing speed and accuracy. Perfect for learners at all levels to become typing masters.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "typing, improve typing speed, typing practice, keyboard skills, typing master, touch typing, speed typing",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Type Chars - Elevate Your Typing Skills",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Master your typing skills with Type Chars. Engage in various typing challenges to improve speed and accuracy. Start your journey to becoming a typing master today!",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://typechars.com/Banner.webp",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://typechars.com",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "https://typechars.com/Banner.webp",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Type Chars - Elevate Your Typing Skills",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Improve your typing speed and accuracy with Type Chars. Explore various exercises and games designed for all levels. Become a typing master with us!",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "https://typechars.com/Banner.webp",
    },
  ],
});
</script>


<template>
  <div class="h-full flex flex-col">
    <div class="h-full flex flex-col" :class="active ? 'blur-lg' : null">
      <TheHeader />
      <NuxtPage />
      <div class="flex-grow" />
      <TheFooter />
    </div>
    <InfoResultModal v-if="active" />
  </div>
</template>
