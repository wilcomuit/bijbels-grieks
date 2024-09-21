const questions: Array<QuestionType> = [
  {
    question: 'ἀναβαίνω',
    answers: ['ik ga naar omhoog'],
    type: 'woordenschat'
  },
  {
    question: 'καταβαίνω',
    answers: ['ik ga naar beneden'],
    type: 'woordenschat'
  },
  {
    question: 'ὁράω',
    answers: ['ik zie'],
    type: 'woordenschat'
  },
  {
    question: 'πίνω',
    answers: ['ik drink'],
    type: 'woordenschat'
  },
  {
    question: 'ἁμαρτάνω',
    answers: ['ik zondig'],
    type: 'woordenschat'
  },
  {
    question: 'καταλείπω',
    answers: ['ik verlaat'],
    type: 'woordenschat'
  },
  {
    question: 'μανθάνω',
    answers: ['ik leer'],
    type: 'woordenschat'
  },
  {
    question: 'πάσχω',
    answers: ['ik lijd'],
    type: 'woordenschat'
  },
  {
    question: 'πίπτω',
    answers: ['ik val'],
    type: 'woordenschat'
  },
  {
    question: 'φεύγω',
    answers: ['ik vlucht'],
    type: 'woordenschat'
  },
  {
    question: 'ἰδέ',
    answers: ['zie'],
    explanation: '(ἰδοῦ is de tweede persoon enkelvould imperatief aorist II actief van εἰδον (ὁράω))',
    type: 'woordenschat'
  },
  {
    question: 'ἰδοῦ',
    answers: ['zie'],
    explanation: '(ἰδοῦ is de tweede persoon enkelvoud imperatief aorist II medium van εἰδον (ὁράω))',
    type: 'woordenschat'
  }
]
const lesson25Vocabulary: LessonType = {
  id: 'lesson25-vocabulary',
  name: 'Les 25 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson25Vocabulary
