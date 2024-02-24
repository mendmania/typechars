
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
    <div class="max-w-xl w-full  rounded-lg  p-4 md:p-6">
        <div class="flex justify-between mb-3">
            <div class="flex items-center">
                <div class="flex justify-center items-center">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Your progress</h5>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-3 mb-2">
            <dl class=" rounded-lg flex flex-col items-center justify-center h-[100px] sm:h-[200px]">
                <dt
                    class="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-white sm:text-2xl font-medium flex items-center justify-center mb-1">
                    {{ correctCount }}</dt>
                <dd class="text-orange-600 dark:text-white text-sm sm:text-lg font-medium">words/min</dd>
            </dl>
            <dl class=" rounded-lg flex flex-col items-center justify-center h-[100px] sm:h-[200px]">
                <dt
                    class="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-white text-2xl font-medium flex items-center justify-center mb-1">
                    {{ correctCount }}</dt>
                <dd class="text-teal-600 dark:text-white text-sm sm:text-lg font-medium">chars/min</dd>
            </dl>
            <dl class=" rounded-lg flex flex-col items-center justify-center h-[100px] sm:h-[200px]">
                <dt
                    class="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-white text-xl font-medium flex items-center justify-center mb-1">
                    {{ accuracy }}%</dt>
                <dd class="text-blue-600 dark:text-white text-sm sm:text-lg font-medium">% accuracy</dd>
            </dl>
        </div>
    </div>
</template>
