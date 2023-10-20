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
    "woordenschat": "Vertaal naar het Nederlands:",
    "vervoeging": "Klik op de bijbehorende vervoeging:"
  }
  return questionPrefix[useGreekPracticeStore().currentQuestion.type]
})

const showAnswer = () => {
  if (hideAnswer.value) useGreekPracticeStore().addHintCount()
  hideAnswer.value = false
}

const submitAnswer = (answer: string) => {
  hideAnswer.value = true
  useGreekPracticeStore().submitAnswer(answer)
}

const answers = computed(() => useGreekPracticeStore().currentQuestion.answers)

//:class="['question', useGreekPracticeStore().font]"
</script>

<template>
  <main class="practice-screen" v-if="useStateStore().state === 'practice'">
    <button class="menu-button" @click="useStateStore().setState('menu')">Terug naar menu</button>

    <div class="question-block">
      <h1 v-if="questionPrefix"> {{  questionPrefix }}</h1>
      <h2 class="question question-font">{{  useGreekPracticeStore().currentQuestion.question }}  </h2> 
      <div v-if="useGreekPracticeStore().currentQuestion.type === 'woordenschat'">
        <input ref="answerInput" type="text" @keyup.enter="inputAnswer()"/>
      </div>
      <div v-if="useGreekPracticeStore().currentQuestion.type === 'vervoeging'">
        <table>
          <tr>
            <th>Enkelvoud</th>
            <th>Meervoud</th>
          </tr>
          <tr>
            <td><button @click="submitAnswer('ev_nominatief')" :class="{'correct-answer': !hideAnswer && answers.includes('ev_nominatief')}">Nominatief</button></td>
            <td><button @click="submitAnswer('mv_nominatief')" :class="{'correct-answer': !hideAnswer && answers.includes('mv_nominatief')}">Nominatief</button></td>
          </tr>
          <tr>
            <td><button @click="submitAnswer('ev_accusatief')" :class="{'correct-answer': !hideAnswer && answers.includes('ev_accusatief')}">Accusatief</button></td>
            <td><button @click="submitAnswer('mv_accusatief')" :class="{'correct-answer': !hideAnswer && answers.includes('mv_accusatief')}">Accusatief</button></td>
          </tr>
          <tr>
            <td><button @click="submitAnswer('ev_genitief')" :class="{'correct-answer': !hideAnswer && answers.includes('ev_genitief')}">Genitief</button></td>
            <td><button @click="submitAnswer('mv_genitief')" :class="{'correct-answer': !hideAnswer && answers.includes('mv_genitief')}">Genitief</button></td>
          </tr>
          <tr>
            <td><button @click="submitAnswer('ev_datief')" :class="{'correct-answer': !hideAnswer && answers.includes('ev_datief')}">Datief</button></td>
            <td><button @click="submitAnswer('mv_datief')" :class="{'correct-answer': !hideAnswer && answers.includes('mv_datief')}">Datief</button></td>
          </tr>
        </table>
      </div>
      <p v-if="hideAnswer" class="answer" @click="showAnswer()">Toon antwoord</p>
      <p v-else-if="useGreekPracticeStore().currentQuestion.type === 'woordenschat'" class="answer">
        {{ useGreekPracticeStore().currentQuestion.answers.join(', ') }} {{ useGreekPracticeStore().currentQuestion.explanation }}
      </p>
      <p v-if="useGreekPracticeStore().currentQuestion.type === 'woordenschat'" style="margin-top:15px;">Klik op enter om naar de volgende vraag te gaan.</p>
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

.correct-answer {
  background-color: lightgreen;
}

table {
  border-collapse: collapse;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

td, th {
  text-align: center;
  padding: 8px;
}

th:nth-child(even),
td:nth-child(even) {
	border-left: 1px solid #dddddd;
}
</style>
