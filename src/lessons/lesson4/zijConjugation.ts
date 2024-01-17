const questions: Array<QuestionType> = [
  {
    question: 'αἰτοῦσιν',
    answers: ['ze vragen', 'zij vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦσιν',
    answers: ['ze lasteren', 'zij lasteren', 'ze lasteren God', 'zij lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦσιν',
    answers: ['ze zegenen', 'zij zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦσιν',
    answers: ['ze zoeken', 'zij zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦσιν',
    answers: ['ze kijken', 'zij kijken', 'ze zien', 'zij zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦσιν',
    answers: ['ze roepen', 'zij roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλοῦσιν',
    answers: ['ze spreken', 'zij spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυροῦσιν',
    answers: ['ze getuigen', 'zij getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῦσιν',
    answers: [
      'ze hebben berouw',
      'zij hebben berouw',
      'ze komen tot andere gedachten',
      'zij komen tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦσιν',
    answers: ['ze haten', 'zij haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιοῦσιν',
    answers: ['ze doen', 'zij doen', 'ze maken', 'zij maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦσιν',
    answers: ['ze onderhouden', 'zij onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλοῦσιν',
    answers: ['ze houden van', 'zij houden van', 'ze hebben lief', 'zij hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  }
]
const lesson4ZijConjugation: LessonType = {
  id: 'lesson4-zij-conjugation',
  name: 'Les 4 – Ze/zij vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4ZijConjugation
