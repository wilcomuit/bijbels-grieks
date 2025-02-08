const questions: Array<QuestionType> = [
  {
    question: 'στρέφω',
    answers: ['ik draai om'],
    type: 'woordenschat'
  },
  {
    question: 'ἐστράφην',
    answers: ['ik draaide'],
    explanation: '(aorist II passief deponent)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστρέφω',
    answers: ['ik draai'],
    type: 'woordenschat'
  },
  {
    question: 'καταστροφή',
    answers: ['omwenteling', 'catastrofe'],
    type: 'woordenschat'
  },
  {
    question: 'ὑποστρέφω',
    answers: ['ik keer terug'],
    type: 'woordenschat'
  },
  {
    question: 'φαίνω',
    answers: ['ik schijn'],
    explanation: '(fenomeen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐφάνην',
    answers: ['ik verscheen'],
    explanation: '(aorist II passief)',
    type: 'woordenschat'
  }
]
const lesson35Vocabulary: LessonType = {
  id: 'lesson35-vocabulary',
  name: 'Les 35 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson35Vocabulary
