import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './state';
import les3 from './lessen/les3';
import les4 from './lessen/les4';
import les5 from './lessen/les5';
import les6 from './lessen/les6';
import les7 from './lessen/les7';

export const useGreekPracticeStore = defineStore('greekPractice', () => {
  const lessons: Ref<{ [key: string]: any}> = ref({})

  lessons.value["Les 3"] = les3
  lessons.value["Les 4"] = les4
  lessons.value["Les 5"] = les5
  lessons.value["Les 6"] = les6
  lessons.value["Les 7"] = les7

  let questions: Ref<Array<any>> = ref([])
  let currentQuestion: Ref<any> = ref({})

  let selectedLessons: Ref<Array<string>> = ref([])

  let wrongAnswerCount = ref(0)
  let correctAnswerCount = ref(0)
  let hintCount = ref(0)

  const toggleLesson = (lessonName: string, lesson: any) => {
    const foundIndex = selectedLessons.value.findIndex((lesson: string) => lesson === lessonName)
    if (foundIndex < 0) selectedLessons.value.push(lessonName)
    else selectedLessons.value.splice(foundIndex, 1)
  }

  function addQuestions() {
    for (const key of Object.keys(lessons.value)) {
      if (selectedLessons.value.includes(key)) questions.value = [...questions.value, ...lessons.value[key]]
    }
  }

  function resetQuestions() {
    questions.value = []
    wrongAnswerCount.value = 0
    correctAnswerCount.value = 0
    hintCount.value = 0

    selectedLessons.value = []

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
    getNextRandomQuestion()
  }

  return { questions, currentQuestion, wrongAnswerCount, correctAnswerCount, selectedLessons, lessons, hintCount, addHintCount, toggleLesson, addQuestions, resetQuestions, getNextRandomQuestion, submitAnswer }
})
