const questions: Array<QuestionType> = [
  {
    question: 'ἵνα',
    answers: ['met de bedoeling dat'],
    type: 'woordenschat'
  },
  {
    question: 'ὅπως',
    answers: ['met de bedoeling dat'],
    type: 'woordenschat'
  },
  {
    question: 'ὅταν',
    answers: ['wanneer', 'wanneer ook'],
    explanation: '()',
    type: 'woordenschat'
  },
  {
    question: 'οἶδα',
    answers: ['ik ken', 'ik weet'],
    explanation: '()',
    type: 'woordenschat'
  }
]
const lesson38Vocabulary: LessonType = {
  id: 'lesson38-vocabulary',
  name: 'Les 38 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson38Vocabulary
