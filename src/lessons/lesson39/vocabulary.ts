const questions: Array<QuestionType> = [
  {
    question: 'εἰ',
    answers: ['indien', 'als'],
    explanation: '(voorwaardelijk)',
    type: 'woordenschat'
  },
  {
    question: 'ἐάν',
    answers: ['indien', 'als'],
    explanation: '(minder bepaald dan εἰ) (εἰ + ἄν = ἐάν)',
    type: 'woordenschat'
  },
  {
    question: 'εἴτε',
    answers: ['of'],
    type: 'woordenschat'
  }
]
const lesson39Vocabulary: LessonType = {
  id: 'lesson39-vocabulary',
  name: 'Les 39 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson39Vocabulary
