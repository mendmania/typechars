
<script setup>

import { useModalStore } from '../../stores/modal'
import { useFacebook } from '../../composables/useFacebook';
import { storeToRefs } from 'pinia';

const { sharePost } = useFacebook();
const modalStore = useModalStore()

const { data, showModal, analytics } = storeToRefs(modalStore)

const onModalClose = () => {
    modalStore.resetAnalytics()
    modalStore.hideModal()
}

useHead({
  title: 'Type Chars results!',
  meta: [
    { name: 'description', content: `My result are ${data.value.accuracy}% while writing ${data.value.count} words` },
    { property: 'og:title', content: 'Can you beat my results?' },
    { property: 'og:description', content: `My result are ${data.value.accuracy}% while writing ${data.value.count} words` },
    { property: 'og:type', content: 'website' },
    // Add more meta tags as needed
  ]
})

const shareOnFacebook = () => {
    const quote = `My result are ${data.value.accuracy}% while writing ${data.value.count} words`
    sharePost(location.href, quote)
}
</script>

<template>
    <!-- Main modal -->
    <div
        class="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="w-full h-full absolute"></div>
        <div class="relative p-4 w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="onModalClose" type="button"
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>

                <div class="p-4 md:p-5 flex  flex-col items-center">

                    <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Type Chars Results.</h3>

                    <div class="flex justify-between w-full mb-1 text-gray-500 dark:text-gray-400">
                        <span class="text-base font-normal">Progress</span>
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ data.correctCount }} correct of
                            {{ data.count }} typed</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div class="bg-orange-500 h-2.5 rounded-full" :style="{ width: `${data.accuracy}%` }"></div>
                    </div>
                    <InfoResults :correctCount="data.correctCount" :accuracy="data.accuracy" :count="data.count" :correctCharsCount="data.correctCharsCount" />
                    <InfoChart :wrongCharsPerSec="analytics.wrongCharsPerSec"
                        :correctCharsPerSec="analytics.correctCharsPerSec" />

                    <!-- Modal footer -->
                    <div class="w-full flex items-center justify-end mt-6 space-x-4 rtl:space-x-reverse">
                        <button type="button" @click="shareOnFacebook"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Share on Facebook
                        </button>
                        <button @click="onModalClose" type="button"
                            class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
