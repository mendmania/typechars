<script setup>
import { ref } from 'vue'

const props = defineProps({
    timer: {
        type: Number,
        required: false,
        default: 15
    },

})

</script>

<template>
    <div class="relative">
        <div class="spinner-wrapper">
            <div
                class="background-strip flex justify-center items-center bg-gray-300 dark:bg-transparent">
                <div class="flex flex-col items-center">
                    <span class="text-4xl font-bold">
                        {{ timer }}
                    </span>
                    <span class="text-xs">
                        seconds
                    </span>
                </div>
            </div>
            <div class="pie spinner"></div>
            <div class="pie filler"></div>
            <div class="mask"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.spinner-wrapper {
    position: relative;
    margin: 40px auto;
    // background: @appl;
    @apply dark:text-white text-gray-700;
}


@mixin timer($item, $durationn, $size, $color, $border, $hover: running) {
    $duration: v-bind(timerValue);

    #{$item},
    #{$item} * {
        box-sizing: border-box;
    }

    #{$item} {
        width: $size;
        height: $size;
    }

    #{$item} .pie {
        width: 50%;
        height: 100%;
        transform-origin: 100% 50%;
        position: absolute;
        background: $color;
        border: #{$border};
    }

    #{$item} .spinner {
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
        z-index: 400;
        border-right: none;
        animation: rota $duration linear infinite;
    }

    #{$item}:hover .spinner,
    #{$item}:hover .filler,
    #{$item}:hover .mask {
        animation-play-state: $hover;
    }

    .background-strip {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        border: 9px solid #c1ff72;
        z-index: 100;
    }

    #{$item} .filler {
        border-radius: 0 100% 100% 0 / 0 50% 50% 0;
        left: 50%;
        opacity: 0;
        z-index: 100;
        animation: opa $duration steps(1, end) infinite reverse;
        border-left: none;
        border-color: #c1ff72;
    }

    #{$item} .mask {
        width: 50%;
        height: 100%;
        transform-origin: 100% 50%;
        position: absolute;
        background: transparent;
        z-index: 500;
        animation: opa2 $duration steps(1) infinite reverse;
        border: 9px solid #c1ff72;
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
        border-right: none;
    }

    @keyframes rota {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes opa {
        0% {
            opacity: 1;
        }

        50%,
        100% {
            opacity: 0;
        }
    }

    @keyframes opa2 {
        0% {
            opacity: 0;
        }

        50%,
        100% {
            opacity: 1;
        }
    }

}

@include timer('.spinner-wrapper', v-bind(timerValue), 150px, transparent, '9px solid #c1ff72');
</style>