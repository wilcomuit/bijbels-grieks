<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGreekPracticeStore } from './stores/practice'
import { useStateStore } from './stores/state';



const answerInput: any = ref(null)

const startPractice = () => {
  useGreekPracticeStore().addQuestions()
  useStateStore().setState('practice')
  getQuestion()
}

const returnToMenu = () => {
  useStateStore().setState('menu')
}

const getQuestion = () => {
  useGreekPracticeStore().getNextRandomQuestion()
}

const inputAnswer = () => {  
  useGreekPracticeStore().submitAnswer(answerInput?.value?.value?.toLowerCase())
  answerInput.value.value = ""
}

const questionPrefix = computed(() => {
  const questionPrefix: any = {
    "woordenschat": "Vertaal naar het Nederlands: \n"
  }
  return questionPrefix[useGreekPracticeStore().currentQuestion.type]
})

</script>

<template>
  <main style="margin-left: 10px;" v-if="useStateStore().state === 'menu'">
   <h1>Welkom! Selecteer lessen om deze te oefenen.</h1>
   <div v-for="[key, value] in Object.entries(useGreekPracticeStore().lessons)" :key="key">
    <input type="checkbox" @change="useGreekPracticeStore().toggleLesson(key, value)"> {{ key }}
   </div>
   <button @click="startPractice()" :disabled="useGreekPracticeStore().selectedLessons.length === 0">Start</button>
  </main>

  <main style="margin-left: 10px; margin-top: 10px;" v-if="useStateStore().state === 'practice'">
    <button @click="returnToMenu()">Terug naar menu</button>

   <h1 v-if="questionPrefix"> {{  questionPrefix }}</h1>

   <h2>{{  useGreekPracticeStore().currentQuestion.question }}</h2>
   

   <input ref="answerInput" type="text" @keyup.enter="inputAnswer()"/>
   <p style="margin-top:15px;">Klik op enter om naar de volgende vraag te gaan.</p>
   <p>Correcte antwoorden {{  useGreekPracticeStore().correctAnswerCount }}</p>
   <p>Foute antwoorden {{  useGreekPracticeStore().wrongAnswerCount }}</p>
  </main>

  <main style="margin-left: 10px; margin-top: 10px;" v-if="useStateStore().state === 'endScreen'">
    <button @click="returnToMenu()">Terug naar menu</button>
    <h1>Correcte antwoorden {{  useGreekPracticeStore().correctAnswerCount }}</h1>
   <h1>Foute antwoorden {{  useGreekPracticeStore().wrongAnswerCount }}</h1>
   <h1>The end.</h1>
  </main>
</template>

<style lang="scss">




</style>
