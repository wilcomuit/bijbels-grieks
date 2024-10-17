<script setup lang="ts">
import { useGreekPracticeStore } from '@/stores/practice'
import { computed, ref } from 'vue'


const answerInput: any = ref(null)

const submittedVocabulary: any = ref('')

const submitAnswer = (answer: string) => {
  emit('setHideAnswer', true)
  useGreekPracticeStore().submitAnswer(answer, submittedVocabulary.value)
  answerInput.value.value = ''
  submittedVocabulary.value = ''
}
const emit = defineEmits(['setHideAnswer'])
const props = defineProps({
  hideAnswer: {
    type: Boolean,
    required: true
  }
})

const inputAnswer = () => {
  submittedVocabulary.value = answerInput?.value?.value?.toLowerCase()
}

const answers = computed(() => useGreekPracticeStore().currentQuestion.answers)
</script>

<template>

  <div v-show='!submittedVocabulary'>
    <p
      style="margin-top: 15px"
    >
      Geef de vertaling van nominatief enkelvoud van bovenstaand woord.<br>
      Klik op enter om naar de volgende vraag te gaan.

    </p>


    <div>
      <input ref="answerInput" type="text" @keyup.enter="inputAnswer()" />
    </div>
    <p
      style="margin-top: 15px"
    >
    </p>

  </div>
  <div v-show='submittedVocabulary'>
    <table>
      <tr>
        <th>Enkelvoud</th>
        <th>Meervoud</th>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('ev_nominatief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_nominatief') }"
          >
            Nominatief
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('mv_nominatief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_nominatief') }"
          >
            Nominatief
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('ev_accusatief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_accusatief') }"
          >
            Accusatief
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('mv_accusatief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_accusatief') }"
          >
            Accusatief
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('ev_genitief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_genitief') }"
          >
            Genitief
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('mv_genitief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_genitief') }"
          >
            Genitief
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('ev_datief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_datief') }"
          >
            Datief
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('mv_datief')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_datief') }"
          >
            Datief
          </button>
        </td>
      </tr>
    </table>

  </div>


</template>

<style lang="scss">
.menu-button {
  margin-top: 20px;
}
.end-screen {
  text-align: center;

  .result-block {
    margin-top: 5%;
  }
}
</style>
