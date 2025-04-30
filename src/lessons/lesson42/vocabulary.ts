const questions: Array<QuestionType> = [
  {
    question: 'δίδωμι',
    answers: ['ik geef'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποδίδομι',
    answers: ['ik geef terug', 'ik betaal'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποδίδομαι',
    answers: ['ik verkoop'],
    type: 'woordenschat'
  },
  {
    question: 'παραδίδομι',
    answers: ['ik lever over', 'ik verraad'],
    type: 'woordenschat'
  }
]
const lesson42Vocabulary: LessonType = {
  id: 'lesson42-vocabulary',
  name: 'Les 42 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson42Vocabulary
