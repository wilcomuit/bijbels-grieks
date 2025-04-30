const questions: Array<QuestionType> = [
  {
    question: 'ἀφίημι',
    answers: ['ik vergeef', 'ik verlaat', 'ik laat toe'],
    type: 'woordenschat'
  },
  {
    question: 'συνίημι',
    answers: ['ik begrijp'],
    type: 'woordenschat'
  },
  {
    question: 'δείκνυμι',
    answers: ['ik toon'],
    type: 'woordenschat'
  },
  {
    question: 'φημί',
    answers: ['ik zeg'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολλυμι',
    answers: ['ik verwoest', 'ik verlies'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολλυμαι',
    answers: ['ik ga ten onder'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπόλωλα',
    answers: ['ik ben ten onder gegaan'],
    type: 'woordenschat'
  }
]
const lesson44Vocabulary: LessonType = {
  id: 'lesson44-vocabulary',
  name: 'Les 44 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson44Vocabulary
