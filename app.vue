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
  title: "Improve Your Typing Speed and Accuracy | TypeChars.com",
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
    {
      hid: "og:image:alt",
      name: "og:image:alt",
      content: "https://typechars.com/Banner.webp",
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "TypeChars",
        "url": "https://typechars.com",
        "logo": "https://typechars.com/_vercel/image?url=%2FIcon.png&w=1536&q=100",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61556640643131",
        ],
        "description": "TypeChars offers interactive exercises to improve typing speed and accuracy, suitable for all skill levels.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mahir Domi",
          "addressLocality": "Prishtine",
          "postalCode": "10000",
          "addressCountry": "XK"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "info@typechars.com",
          "telephone": "+1-800-TYPE-FAST"
        }
      })
    }
  ]
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
