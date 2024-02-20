
<script setup>

const props = defineProps({
    correctCount: {
        type: Number,
        required: false,
    },
    accuracy: {
        type: Number,
        required: false,
    },
})

</script>

<template>
    <div class="max-w-xl w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mb-6">
        <div class="flex justify-between mb-3">
            <div class="flex items-center">
                <div class="flex justify-center items-center">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Your progress</h5>
                    <svg data-popover-target="chart-info" data-popover-placement="bottom"
                        class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                    </svg>

                </div>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div class="grid grid-cols-3 gap-3 mb-2">
                <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[100px]">
                    <dt
                        class="w-12 h-12 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
                        {{ correctCount }}</dt>
                    <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">words/min</dd>
                </dl>
                <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[100px]">
                    <dt
                        class="w-12 h-12 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
                        {{ correctCount }}</dt>
                    <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">chars/min</dd>
                </dl>
                <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[100px]">
                    <dt
                        class="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
                        {{ accuracy }}%</dt>
                    <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">% accuracy</dd>
                </dl>
            </div>

        </div>

    </div>
</template>
