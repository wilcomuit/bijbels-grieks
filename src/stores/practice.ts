import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './state';
import { useLessonsStore } from './lessons';

export const useGreekPracticeStore = defineStore('greekPractice', () => {
  //const fonts = ['deja-vu-font', 'open-sans-font', 'ubuntu-font']
  //const font: Ref<string> = ref('ubuntu-font')

  const conjugationTypes = ['ev_nominatief', 'ev_accusatief', 'ev_genitief', 'ev_datief', 'mv_nominatief', 'mv_accusatief', 'mv_genitief', 'mv_datief']
  let questions: Ref<Array<any>> = ref([])
  let currentQuestion: Ref<any> = ref({})


  let wrongAnswerCount = ref(0)
  let correctAnswerCount = ref(0)
  let hintCount = ref(0)
  let totalCount = ref(0)

  function startPractice() {
    for (const lesson of useLessonsStore().getActiveLessons()) {
      if (lesson.type === 'vervoeging') {
        for (const question of lesson.questions as Array<ConjugationQuestionType>) {
          if (useStateStore().options.allConjugations) {
            const results: Array<any> = []
            for (const [key, value] of Object.entries(question)) {
              if (key === 'type') continue
              const foundResult = results.find((r: any) => r.question === value)
              if (foundResult) foundResult.answers.push(key)
              else results.push({
                question: value,
                answers: [key],
                type: question.type
              })
            }
            questions.value = [...questions.value, ...results]
          } else {
            const conjugationIndex = Math.floor(Math.random() * conjugationTypes.length)
            // @ts-ignore
            const chosenConjugation: string = question[conjugationTypes[conjugationIndex]]

            questions.value = [...questions.value, {
              question: chosenConjugation,
              answers: getAllConjugationAnswers(question, chosenConjugation),
              type: question.type
            }]

          }
        }
        
      } else questions.value = [...questions.value, ...lesson.questions]
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
    const question = questions.value[index]
    currentQuestion.value = question
    return currentQuestion.value
  }

  function getAllConjugationAnswers(question: ConjugationQuestionType, chosenAnswer: string) {
    const results = []
    for (const [key, value] of Object.entries(question)) {
      if (value === chosenAnswer) results.push(key)
    }
    return results
  }

  function submitAnswer(answer: string) {
    if (currentQuestion.value.answers.map((answer:string) => answer.toLowerCase()).includes(answer)) {
      correctAnswerCount.value++
      if (useStateStore().options.deleteAfterSuccess === true) {
        questions.value = questions.value.filter((question: any) => question.question !== currentQuestion.value.question)
      }
    } else {
      wrongAnswerCount.value++
    }
    if (questions.value.length === 0) useStateStore().setState('endScreen')
    getNextRandomQuestion()
  }

  return { 
    //font, 
    questions, totalCount, currentQuestion, wrongAnswerCount, correctAnswerCount, hintCount, addHintCount, startPractice, resetQuestions, getNextRandomQuestion, submitAnswer }
})
