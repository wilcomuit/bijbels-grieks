const questions: Array<QuestionType> = [
  {
    question: 'Φαρισαῖος εὐλογεῖ Ἰουδαῖους',
    answers: ['Een Farizeeër zegent Joden'],
    correctOptions: ['een', 'Farizeeër', 'zegent', 'Joden'],
    wrongOptions: ['de', 'Farizeeërs', 'zegenen', 'Jood', 'het', 'Judea'],
    type: 'sentence'
  },
  {
    question: 'Φαρισαῖος εὐλογεῖ Ἰουδαῖον',
    answers: ['Een Farizeeër zegent een Jood'],
    correctOptions: ['een', 'Farizeeër', 'zegent', 'een', 'Jood'],
    wrongOptions: ['de', 'Farizeeërs', 'zegenen', 'Joden', 'de', 'het', 'Judea'],
    type: 'sentence'
  },
  {
    question: 'Ἰουδαῖοι εὐλογοῦσιν Φαρισαῖον',
    answers: ['Joden zegenen een Farizeeër'],
    correctOptions: ['Joden', 'zegenen', 'een', 'Farizeeër'],
    wrongOptions: ['de', 'Farizeeërs', 'zegent', 'Jood', 'het', 'Judea'],
    type: 'sentence'
  },
  {
    question: 'Ἰουδαῖος εὐλογεῖ Φαρισαῖον',
    answers: ['een Jood zegent een Farizeeër'],
    correctOptions: ['een', 'Jood', 'zegent', 'een', 'Farizeeër'],
    wrongOptions: ['de', 'Farizeeërs', 'zegenen', 'Joden', 'het', 'Judea'],
    type: 'sentence'
  },
  {
    question: 'Ἰουδαῖος βλασφημεῖ',
    answers: ['Een Jood lastert God', 'Een Jood lastert'],
    correctOptions: ['een', 'Jood', 'lastert', 'God'],
    wrongOptions: ['de', 'Joden', 'lasteren', 'getuigt', 'getuigen', 'van', 'Judas', 'Judea'],
    type: 'sentence'
  }
]
const lesson5Sentences: LessonType = {
  id: 'lesson5-sentences',
  name: 'Les 5 – Zinnen <b>(demo)</b>',
  type: 'sentences',
  active: false,
  questions
}
export default lesson5Sentences
