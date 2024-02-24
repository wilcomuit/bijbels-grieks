import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGreekPracticeStore } from './practice'

export const useStateStore = defineStore('state', () => {
  let state = ref('menu')
  let options: any = ref({})
  options.value.deleteAfterSuccess = true
  options.value.allConjugations = true
  function setState(s: string) {
    if (s === 'menu') useGreekPracticeStore().resetQuestions()
    state.value = s
  }

  return { state, options, setState }
})
