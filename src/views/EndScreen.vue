<script setup lang="ts">
import { useGreekPracticeStore } from '../stores/practice'
import { useStateStore } from '../stores/state'
</script>

<template>
  <main class="end-screen">
    <div class="result-block">
      <h1>Ga terug naar het menu om opnieuw te oefenen.</h1>
      <h2>
        Goede antwoorden:
        <span style="color: green">{{ useGreekPracticeStore().correctAnswerCount }}</span>
      </h2>
      <h2>
        Foute antwoorden:
        <span style="color: red">{{ useGreekPracticeStore().wrongAnswerCount }}</span>
      </h2>
      <h2>Hints getoond: {{ useGreekPracticeStore().hintCount }}</h2>
    </div>
    <button v-if="useGreekPracticeStore().wrongAnswerCount > 0" class="wrong-answers-button"
            @click="useStateStore().setState('wrongAnswers')">Fouten inzien</button>

    <button class="menu-button" @click="useStateStore().setState('menu')">Terug naar menu</button>
  </main>
</template>

<style lang="scss">
.menu-button {
  margin-top: 20px;
  margin-left: 5px;
}
.wrong-answers-button {
  margin-top: 20px;
  margin-left: 5px;
}
.end-screen {
  text-align: center;

  .result-block {
    margin-top: 5%;
  }
}
</style>
