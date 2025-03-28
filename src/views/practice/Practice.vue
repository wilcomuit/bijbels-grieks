<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { useGreekPracticeStore } from '@/stores/practice'
import { useStateStore } from '@/stores/state'
import Conjugation from '@/views/questionTypes/Conjugation.vue'
import ConjugationWithVocabulary from '@/views/questionTypes/ConjugationWithVocabulary.vue'
import Footer from './Footer.vue'
import Vocabulary from '@/views/questionTypes/Vocabulary.vue'
import Sentence from '@/views/questionTypes/Sentence.vue'

const answerInput: any = ref(null)
const hideAnswer: Ref<boolean> = ref(true)

const inputAnswer = () => {
  hideAnswer.value = true
  useGreekPracticeStore().submitAnswer(answerInput?.value?.value?.toLowerCase())
  answerInput.value.value = ''
}

const questionPrefix = computed(() => {
  const questionPrefix: any = {
    woordenschat: 'Vertaal naar het Nederlands:',
    vervoeging: 'Klik op de bijbehorende vervoeging:'
  }
  return questionPrefix[useGreekPracticeStore().currentQuestion.type]
})

//:class="['question', useGreekPracticeStore().font]"
</script>

<template>
  <main class="practice-screen" v-if="useStateStore().state === 'practice'">
    <button class="menu-button" @click="useStateStore().setState('menu')">Terug naar menu</button>

    <div class="question-block">
      <h1 v-if="questionPrefix">{{ questionPrefix }}</h1>
      <h2 class="question question-font">{{ useGreekPracticeStore().currentQuestion.question }}</h2>
      <Vocabulary
        v-if="useGreekPracticeStore().currentQuestion.type === 'woordenschat'"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Sentence
        v-if="useGreekPracticeStore().currentQuestion.type === 'sentence'"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Conjugation
        v-if="useGreekPracticeStore().currentQuestion.type === 'vervoeging'"
        :hide-answer="hideAnswer"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <ConjugationWithVocabulary
        v-if="useGreekPracticeStore().currentQuestion.type === 'vervoeging-woordenschat'"
        :hide-answer="hideAnswer"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Footer :hide-answer="hideAnswer" @setHideAnswer="(val) => (hideAnswer = val)" />
    </div>

    <span v-if="false" style="color: green">✔</span>
    <span v-if="false" style="color: red">✘</span>
  </main>
</template>

<style lang="scss">
.practice-screen {
  text-align: center;
  .question-block {
    margin-top: 5%;
  }
  .question {
    margin-top: 25px;
    margin-bottom: 30px;
  }
  .answer {
    border: 1px solid black;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
  }
}
.menu-button {
  margin-top: 20px;
}
.question-font {
  font-family: 'Greek';
}

.correct-answer {
  background-color: lightgreen;
}

table {
  border-collapse: collapse;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

td,
th {
  text-align: center;
  padding: 8px;
}

th:nth-child(even),
td:nth-child(even) {
  border-left: 1px solid #dddddd;
}
</style>
