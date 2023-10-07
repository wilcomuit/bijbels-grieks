<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { useGreekPracticeStore } from '../stores/practice'
import { useStateStore } from '../stores/state';
import { useLessonsStore } from '../stores/lessons';

const answerInput: any = ref(null)
const hideAnswer: Ref<boolean> = ref(true)

const inputAnswer = () => {
  hideAnswer.value = true
  useGreekPracticeStore().submitAnswer(answerInput?.value?.value?.toLowerCase())
  answerInput.value.value = ""
}

const questionPrefix = computed(() => {
  const questionPrefix: any = {
    "woordenschat": "Vertaal naar het Nederlands: \n"
  }
  return questionPrefix[useGreekPracticeStore().currentQuestion.type]
})

const showAnswer = () => {
  if (hideAnswer.value) useGreekPracticeStore().addHintCount()
  hideAnswer.value = false
}

//:class="['question', useGreekPracticeStore().font]"
</script>

<template>
  <main class="practice-screen" v-if="useStateStore().state === 'practice'">
    <button class="menu-button" @click="useStateStore().setState('menu')">Terug naar menu</button>

    <div class="question-block">
      <h1 v-if="questionPrefix"> {{  questionPrefix }}</h1>
      <h2 class="question question-font">{{  useGreekPracticeStore().currentQuestion.question }}  </h2> 
      <input  ref="answerInput" type="text" @keyup.enter="inputAnswer()"/>
      <p v-if="hideAnswer" class="answer" @click="showAnswer()">Toon antwoord</p>
      <p v-else class="answer">
        {{ useGreekPracticeStore().currentQuestion.explanation }}
      </p>
      <p style="margin-top:15px;">Klik op enter om naar de volgende vraag te gaan.</p>
      <p>Goede antwoorden: <span style="color: green;">{{  useGreekPracticeStore().correctAnswerCount }}</span> / {{ useGreekPracticeStore().totalCount }}</p>
      <p>Foute antwoorden: <span style="color: red;">{{  useGreekPracticeStore().wrongAnswerCount }}</span></p>
      <p>Hints getoond: {{  useGreekPracticeStore().hintCount }}</p>
    </div>

    <span v-if="false" style="color: green;">✔</span>
    <span v-if="false" style="color: red;">✘</span>
  </main>
</template>

<style lang="scss">
.practice-screen {
  text-align: center;
  .question-block {
    margin-top: 5%;
  }
  .question {
    margin-top:25px;
    margin-bottom:30px;
  }
  .answer {
    border: 1px solid black;
    margin-top:20px;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
  }
}
.menu-button {
    margin-top:20px;
}
.question-font {
  font-family: 'OpenSans';
}
</style>
