<script setup>
import { useModalStore } from './stores/modal'
import { storeToRefs } from 'pinia';

const modalStore = useModalStore()

const { data, showModal, active } = storeToRefs(modalStore)

definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "http://schema.org",
        "@type": "Course",
        "name": "Advanced Typing Skills",
        "description": "This course will help you improve your typing speed and accuracy, featuring a variety of interactive typing exercises.",
        "provider": {
          "@type": "Organization",
          "name": "TypeChars",
          "url": "https://typechars.com"
        }
      }
    }
  ]
});

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
  title: "Improve Your Typing Speed and Accuracy with Online Typing Exercises | TypeChars.com",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Master typing with TypeChars.com's engaging online tutor. Our typing exercises are designed to boost your speed and accuracy, perfect for all skill levels.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "typing, improve typing speed, typing practice, keyboard skills, typing masterty, ping speed test, accuracy in typing, keyboard practice exercises, online typing tutor, typing skills development, speed typing",
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
        "Master typing with TypeChars.com's engaging online tutor. Our typing exercises are designed to boost your speed and accuracy, perfect for all skill levels.",
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
