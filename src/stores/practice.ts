import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './state';
import { useLessonsStore } from './lessons';

export const useGreekPracticeStore = defineStore('greekPractice', () => {
  //const fonts = ['deja-vu-font', 'open-sans-font', 'ubuntu-font']
  //const font: Ref<string> = ref('ubuntu-font')

  let questions: Ref<Array<any>> = ref([])
  let currentQuestion: Ref<any> = ref({})


  let wrongAnswerCount = ref(0)
  let correctAnswerCount = ref(0)
  let hintCount = ref(0)
  let totalCount = ref(0)

  function startPractice() {
    for (const lesson of useLessonsStore().getActiveLessons()) {
      questions.value = [...questions.value, ...lesson.questions]
    }
    totalCount.value = questions.value.length
    getNextRandomQuestion()
    useStateStore().setState('practice')
  }

  function resetQuestions() {
    questions.value = []
    wrongAnswerCount.value = 0
    correctAnswerCount.value = 0
    hintCount.value = 0
    useLessonsStore().deactivateLessons()
  }

  function addHintCount() {
    hintCount.value++
  }

  function getNextRandomQuestion() {
    if (questions.value.length === 0) return false
    const index = Math.floor(Math.random() * questions.value.length)
    currentQuestion.value = questions.value[index]
    currentQuestion.value.answers = currentQuestion.value.answers.map((answer:string) => answer.toLowerCase())
    return currentQuestion.value
  }

  function submitAnswer(answer: string) {
    if (currentQuestion.value.answers.includes(answer)) {
      correctAnswerCount.value++
      if (useStateStore().options.deleteAfterSuccess === true) {
        questions.value = questions.value.filter((question: any) => question.question !== currentQuestion.value.question)
      }
      if (questions.value.length === 0) useStateStore().setState('endScreen')
    } else {
      wrongAnswerCount.value++
      questions.value.push(currentQuestion.value)
    }
    //const index = Math.floor(Math.random() * 3)
    //font.value = fonts[index]
    getNextRandomQuestion()
  }

  return { 
    //font, 
    questions, totalCount, currentQuestion, wrongAnswerCount, correctAnswerCount, hintCount, addHintCount, startPractice, resetQuestions, getNextRandomQuestion, submitAnswer }
})
