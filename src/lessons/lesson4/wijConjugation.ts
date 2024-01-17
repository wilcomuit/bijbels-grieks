const questions: Array<QuestionType> = [
  {
    question: 'αἰτοῦμεν',
    answers: ['wij vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦμεν',
    answers: ['wij lasteren', 'wij lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦμεν',
    answers: ['wij zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦμεν',
    answers: ['wij zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦμεν',
    answers: ['wij kijken', 'wij zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦμεν',
    answers: ['wij roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλοῦμεν',
    answers: ['wij spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυροῦμεν',
    answers: ['wij getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῦμεν',
    answers: ['wij hebben berouw', 'wij komen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦμεν',
    answers: ['wij haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιοῦμεν',
    answers: ['wij doen', 'wij maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦμεν',
    answers: ['wij onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλοῦμεν',
    answers: ['wij houden van', 'wij hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  }
]
const lesson4WijConjugation: LessonType = {
  id: 'lesson4-wij-conjugation',
  name: 'Les 4 – Wij vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4WijConjugation
