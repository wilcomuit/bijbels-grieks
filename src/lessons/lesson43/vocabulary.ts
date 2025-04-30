const questions: Array<QuestionType> = [
  {
    question: 'ἵστημι',
    answers: ['ik sta', 'ik doe staan'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνίστημι',
    answers: ['ik verrijs', 'ik doe opstaan'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφίστημι',
    answers: ['ik heb gezag over'],
    type: 'woordenschat'
  },
  {
    question: 'καθίστημι',
    answers: ['ik benoem'],
    type: 'woordenschat'
  },
  {
    question: 'παρίστημι',
    answers: ['ik benader', 'ik plaats naast', 'ik presenteer'],
    type: 'woordenschat'
  }
]
const lesson43Vocabulary: LessonType = {
  id: 'lesson43-vocabulary',
  name: 'Les 43 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson43Vocabulary
