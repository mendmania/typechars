<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>

    <NuxtLink :to="`articles/${data.url}`"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover aspect-square bg-slate-500 w-full rounded-lg rounded-t-none h-96 md:h-auto md:w-48"
            :src="data.imageUrl" :alt="data.title">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis line-clamp-3">
                {{ data.title }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis line-clamp-5">{{ data.summary }}
            </p>
        </div>
    </NuxtLink>
</template>


<style></style>