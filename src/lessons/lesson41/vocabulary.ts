const questions: Array<QuestionType> = [
  {
    question: 'τίθημι',
    answers: ['ik plaats', 'ik leg'],
    type: 'woordenschat'
  },
  {
    question: 'ἔπιτίθημι',
    answers: ['ik plaats', 'ik leg op'],
    type: 'woordenschat'
  }
]
const lesson41Vocabulary: LessonType = {
  id: 'lesson41-vocabulary',
  name: 'Les 41 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson41Vocabulary
