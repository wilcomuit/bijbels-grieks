const questions: Array<QuestionType> = [
  {
    question: 'αἰτεῖτε',
    answers: ['jullie vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖτε',
    answers: ['jullie lasteren', 'jullie lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖτε',
    answers: ['jullie zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖτε',
    answers: ['jullie zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖτε',
    answers: ['jullie kijken', 'jullie zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖτε',
    answers: ['jullie roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖτε',
    answers: ['jullie spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖτε',
    answers: ['jullie getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖτε',
    answers: ['jullie hebben berouw', 'jullie komen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖτε',
    answers: ['jullie haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖτε',
    answers: ['jullie doen', 'jullie maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖτε',
    answers: ['jullie onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖτε',
    answers: ['jullie houden van', 'jullie hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  }
]
const lesson4JullieConjugation: LessonType = {
  id: 'lesson4-jullie-conjugation',
  name: 'Les 4 – Jullie vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4JullieConjugation
