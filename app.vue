<script setup>
import { useModalStore } from './stores/modal'
import { storeToRefs } from 'pinia';

const modalStore = useModalStore()

const { data, showModal, active } = storeToRefs(modalStore)

useHead({
  title: "Type Chars",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Draw is a thrilling board game of deception. Discover who the spy is before it’s too late! Learn the rules, strategies, and enjoy hours of espionage fun.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "Draw, board game, deception, spy, party game, social deduction, strategy game",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Draw Board Game - Uncover the Deception",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Draw is a thrilling board game of deception. Discover who the spy is before it’s too late! Learn the rules, strategies, and enjoy hours of espionage fun.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://https://Draw.virtualboardzone.com/DrawBanner.jpg",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://Draw.virtualboardzone.com",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "https://https://Draw.virtualboardzone.com/DrawBanner.jpg",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Draw Board Game - Uncover the Deception",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Draw is a thrilling board game of deception. Discover who the spy is before it’s too late! Learn the rules, strategies, and enjoy hours of espionage fun.",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "https://https://Draw.virtualboardzone.com/DrawBanner.jpg",
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
