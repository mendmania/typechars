<script setup>
import { ref } from "vue";
import { TYPE_CHAR_WORDS } from "~/constants/TYPE_CHAR_WORDS";
import Word from '~/models/Word'
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()

const typeInput = ref(null);
const contentEditableValue = ref("");
const analytics = ref({
  correctCharsPerSec: [],
  wrongCharsPerSec: [],
})
// const currentNextWordValue = ref(null);

const pastWords = ref([]);
const tempPastWords = ref([]);
const nextWords = ref([]);
const keyPressed = ref(false)
const inputValue = ref(null)
const isActiveWordCorrect = ref(true)
const isGameActive = ref(false)

const handleKeyDown = event => {
  if (event.key === "Backspace") {
    keyPressed.value = true;
  } else if (event.key === "Enter") {
    if (inputValue.value) {
      inputValue.value += ' '
      checkInput()
    }
    // event.preventDefault()
  }
}

const handleKeyUp = event => {
  keyPressed.value = false;
}

const fillNextWords = (data) => {
  const newArray = getRandomItems(TYPE_CHAR_WORDS, data);

  nextWords.value.push(...newArray);
};

const getRandomItems = (arr, numItems) => {
  let result = new Set();

  while (result.size < numItems) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    const word = new Word()
    word.init(arr[randomIndex])
    result.add(word);
  }

  return Array.from(result);
};

useAsyncData(() => {
  fillNextWords(6);
})

const addFocusToInput = () => {
  typeInput.value.focus();
};

onMounted(() => {
  addFocusToInput()
})

const checkInput = () => {
  if (!isGameActive.value) {
    isGameActive.value = true
  }

  inputValue.value = inputValue.value.trimStart()
  const [activeWord] = nextWords.value

  if (!inputValue.value.trim()) {
    activeWord.resetActiveWord()
    return
  }

  activeWord.setValue(inputValue.value)

  isActiveWordCorrect.value = activeWord.checkWordCorrectnes()

  if (inputValue.value.includes(' ')) {
    activeWord.checkAndFinish()
    inputValue.value = null

    pastWords.value.push(activeWord)
    tempPastWords.value.push(activeWord)
    nextWords.value.shift()
    fillNextWords(1);

  } else {
    // activeWord.resetActiveWord()
  }

}

const calculateAccuracy = words => {
  const correctWordsCount = words.filter(word => word.isCorrect).length;
  const accuracy = (correctWordsCount / words.length) * 100;

  return {
    correctWordsCount: correctWordsCount,
    accuracy: accuracy
  };
}

const result = computed(() => {
  const correctWordsCount = pastWords.value.filter(word => word.isCorrect).length;
  const correctCharsCount = pastWords.value.filter(word => word.isCorrect).join(',').length
  const accuracy = (correctWordsCount / pastWords.value.length) * 100 || 0;
  return {
    correctCount: correctWordsCount,
    accuracy: Math.round(accuracy),
    correctCharsCount: correctCharsCount,
    count: pastWords.value.join(',').length,
  };
})

const timerFinished = () => {
  const router = useRouter()
  modalStore.setAnalytics(analytics.value)
  analytics.value = {
    correctCharsPerSec: [],
    wrongCharsPerSec: [],
  }

  isGameActive.value = false

  modalStore.setModalData(result.value)

  const correctCount = result.value.correctCount
  const accuracy = result.value.accuracy
  const correctCharsCount = result.value.correctCharsCount
  const count = result.value.count

  inputValue.value = null
  pastWords.value = []

  router.push({
    name: 'results',
    query: {
      correctCount,
      accuracy,
      correctCharsCount,
      count,
    },
  });
}

const analyticsFn = () => {

  const lengthsCorrect = tempPastWords.value
    .filter(item => item.isCorrect === true)
    .reduce((acc, item) => acc + item.value.length, 0);

  // Array with lengths of incorrect value strings
  const lengthsIncorrect = tempPastWords.value
    .filter(item => item.isCorrect === false)
    .reduce((acc, item) => acc + item.value.length, 0);

  analytics.value.correctCharsPerSec.push(lengthsCorrect)
  analytics.value.wrongCharsPerSec.push(lengthsIncorrect)

  tempPastWords.value = []
}

</script>

<template>
  <div class="type-input flex flex-col justify-center items-start max-w-screen-lg mx-auto mb-32">
    <h1 class="text-2xl text-gray-900 dark:text-white font-bold">Improve Your Typing Speed and Accuracy</h1>
    <div class="flex flex-col sm:flex-row items-center justify-evenly w-full">
      <InfoTimer v-if="isGameActive" :timerFinishedCallback="timerFinished" :analyticsCallback="analyticsFn"
        :timer="60" />
      <InfoTimerSceleton v-else :timerFinishedCallback="timerFinished" :timer="60" />
      <InfoResults :correctCount="result.correctCount" :accuracy="result.accuracy" :count="result.count"
        :correctCharsCount="result.correctCharsCount" />
    </div>
    <div class="flex justify-start items-center bg-white w-full rounded-lg text-4xl overflow-hidden relative py-4"
      @click="addFocusToInput">

      <div class="text-red-400 w-1/2 flex overflow-hidden justify-end">

        <span v-for="(word, i) in pastWords" :key="`${word}-${i}`"
          class="text-gray-400 mr-3.5 flex items-center whitespace-nowrap"
          :class="word.isCorrect ? '' : 'line-through'">
          {{ word.value }}
        </span>


        <span class="text-gray-400 flex items-center whitespace-nowrap"
          :class="isActiveWordCorrect ? 'text-[#c1ff72]' : 'text-red-700'">
          {{ inputValue }}
        </span>
      </div>

      <span class="custom-cursor border border-black animate-[pulse_.9s_linear_infinite] absolute right-[50%] h-1/2" />

      <div class=" w-1/2 flex"> <span class="mr-3.5 flex items-center whitespace-nowrap" v-for="(word, i) in nextWords"
          :key="`${word}-${i}`">
          {{
        word.remainingWord
      }}
        </span>
      </div>

    </div>
    <div v-show="true"
      class="visually-hidden mt-12 flex justify-center bg-white w-10/12 rounded-3xl text-4xl py-6 overflow-hidden">
      <input ref="typeInput" class="" @keydown="handleKeyDown" @keyup="handleKeyUp" v-model="inputValue"
        placeholder="Hold down a key" @input="checkInput" />
    </div>
    <!-- <span class="text-white">
      <pre>
        {{ nextWords }}
      </pre>

    </span> -->
  </div>
</template>

<style lang="scss">
.type-input {
  .custom-cursor {
    border-width: 0.5px !important;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}
</style>