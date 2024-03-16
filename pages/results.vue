<script setup>

import { useModalStore } from '../../stores/modal'
import { useFacebook } from '../../composables/useFacebook';
import { storeToRefs } from 'pinia';

const { sharePost } = useFacebook();
const modalStore = useModalStore()
const router = useRouter()
const route = useRoute()

const { data, showModal, analytics } = storeToRefs(modalStore)

const onTryAgainClick = () => {
    modalStore.resetAnalytics()
    // modalStore.hideModal()
    router.push('/')
}

const correctCount = computed(() => {
    return data.value.correctCount || route.query.correctCount
})
const accuracy = computed(() => {
    return data.value.accuracy || route.query.accuracy
})
const correctCharsCount = computed(() => {
    return data.value.correctCharsCount || route.query.correctCharsCount
})
const count = computed(() => {
    return data.value.count || route.query.count
})

useHead({
    title: 'Type Chars results!'+accuracy.value,
    meta: [
        { name: 'description', content: `My result are ${accuracy.value}% while writing ${count.value} words` },
        { property: 'og:title', content: 'Can you beat my results?' },
        { property: 'og:description', content: `My result are ${accuracy.value}% while writing ${count.value} words` },
        { property: 'og:type', content: 'website' },
        // Add more meta tags as needed
    ]
})

const shareOnFacebook = () => {
    const quote = `My result are ${accuracy.value}% while writing ${count.value} words`
    sharePost(location.href, quote)
}
</script>

<template>
    <!-- Main modal -->
    <div class="flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0">
        <div class="w-full h-full absolute"></div>
        <div class="relative p-4 w-full max-w-screen-xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="p-4 md:p-5 flex  flex-col items-center">

                    <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Type Chars Results.</h3>

                    <div class="flex justify-between w-full mb-1 text-gray-500 dark:text-gray-400">
                        <span class="text-base font-normal">Progress</span>
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ correctCount }}
                            correct of
                            {{ count }} typed</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div class="bg-orange-500 h-2.5 rounded-full" :style="{ width: `${accuracy}%` }"></div>
                    </div>
                    <InfoResults :correctCount="correctCount" :accuracy="accuracy" :count="count"
                        :correctCharsCount="correctCharsCount" />

                    <InfoChart v-if="analytics.wrongCharsPerSec" :wrongCharsPerSec="analytics.wrongCharsPerSec"
                        :correctCharsPerSec="analytics.correctCharsPerSec" />

                    <!-- Modal footer -->
                    <div class="w-full flex items-center justify-end mt-6 space-x-4 rtl:space-x-reverse">
                        <button type="button" @click="shareOnFacebook"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Share on Facebook
                        </button>
                        <button @click="onTryAgainClick" type="button"
                            class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Try
                            Again</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
