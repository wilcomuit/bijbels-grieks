import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './state';
import { useLessonsStore } from './lessons';

export const useGreekPracticeStore = defineStore('greekPractice', () => {
  //const fonts = ['deja-vu-font', 'open-sans-font', 'ubuntu-font']
  //const font: Ref<string> = ref('ubuntu-font')

  const conjugationTypes = ['ev_nominatief', 'ev_accusatief', 'ev_genitief', 'ev_datief', 'mv_nominatief', 'mv_accusatief', 'mv_genitief', 'mv_datief']
  const questions: Ref<Array<any>> = ref([])
  const currentQuestion: Ref<any> = ref({})


  const wrongAnswerCount = ref(0)
  const correctAnswerCount = ref(0)
  const hintCount = ref(0)
  const totalCount = ref(0)

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
    if (currentQuestion.value.type === 'sentence')
      currentQuestion.value.mixedQuestions = shuffleArray([...question.correctOptions, ...question.wrongOptions])
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
    if (currentQuestion.value.type === 'woordenschat' && currentQuestion.value.answers.map((answer:string) => answer.toLowerCase()).includes(answer) ||
      currentQuestion.value.type === 'sentence' && currentQuestion.value.answers.map((answer:string) => answer.split(' ').join('').toLowerCase()).includes(answer)) {
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

  function shuffleArray(array: Array<string>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  return { 
    //font, 
    questions, totalCount, currentQuestion, wrongAnswerCount, correctAnswerCount, hintCount, addHintCount, startPractice, resetQuestions, getNextRandomQuestion, submitAnswer }
})
