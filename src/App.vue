<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGreekPracticeStore } from './stores/practice'
import { useStateStore } from './stores/state';



const answerInput: any = ref(null)
const hideAnswer: Ref<boolean> = ref(true)

const startPractice = () => {
  useGreekPracticeStore().addQuestions()
  useStateStore().setState('practice')
  getQuestion()
}

const returnToMenu = () => {
  hideAnswer.value = true
  useStateStore().setState('menu')
}

const getQuestion = () => {
  useGreekPracticeStore().getNextRandomQuestion()
}

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
  hideAnswer.value = false
}

</script>

<template>
  <main v-if="useStateStore().state === 'menu'" class="main-menu">
   <h1>Welkom!</h1>
   <h3>Selecteer lessen om de woordenschat te oefenen.</h3>
   <div v-for="[key, value] in Object.entries(useGreekPracticeStore().lessons)" :key="key">
    <input type="checkbox" @change="useGreekPracticeStore().toggleLesson(key, value)"> {{ key }}
   </div>
   <button @click="startPractice()" :disabled="useGreekPracticeStore().selectedLessons.length === 0">Start</button>
  </main>

  <main class="practice-screen" v-if="useStateStore().state === 'practice'">
    <button class="menu-button" @click="returnToMenu()">Terug naar menu</button>

    <div class="question-block">
      <h1 v-if="questionPrefix"> {{  questionPrefix }}</h1>
      <h2 class="question" @click="showAnswer()">{{  useGreekPracticeStore().currentQuestion.question }}  </h2> 
      <input ref="answerInput" type="text" @keyup.enter="inputAnswer()"/>
      <p v-show="!hideAnswer" class="answer">
        {{ useGreekPracticeStore().currentQuestion.explanation }}
      </p>
      <p style="margin-top:15px;">Klik op enter om naar de volgende vraag te gaan.</p>
      <p>Goede antwoorden: <span style="color: green;">{{  useGreekPracticeStore().correctAnswerCount }}</span></p>
      <p>Foute antwoorden: <span style="color: red;">{{  useGreekPracticeStore().wrongAnswerCount }}</span></p>
    </div>

    <span v-if="false" style="color: green;">✔</span>
    <span v-if="false" style="color: red;">✘</span>
  </main>

  <main class="end-screen" v-if="useStateStore().state === 'endScreen'">
    <div class="result-block">
      <h1>Ga terug naar het menu om opnieuw te oefenen.</h1>
      <h2>Goede antwoorden: <span style="color: green;">{{  useGreekPracticeStore().correctAnswerCount }}</span></h2>
      <h2>Foute antwoorden: <span style="color: red;">{{  useGreekPracticeStore().wrongAnswerCount }}</span></h2>
    </div>
    <button class="menu-button" @click="returnToMenu()">Terug naar menu</button>

    
  </main>
</template>

<style lang="scss">


.main-menu {
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  button {
    margin-top: 10px;
  }
  input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

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
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }
}
.menu-button {
    margin-top:20px;
}
.end-screen {
  text-align: center;
  
  .result-block {
    margin-top: 5%;
  }
}

</style>
