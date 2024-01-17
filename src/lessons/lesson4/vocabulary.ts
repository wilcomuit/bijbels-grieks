const questions: Array<QuestionType> = [
  {
    question: 'αἰτέω',
    answers: ['ik vraag'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημέω',
    answers: ['ik laster', 'ik laster God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογέω',
    answers: ['ik zegen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητέω',
    answers: ['ik zoek'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρέω',
    answers: ['ik kijk', 'ik zie'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλέω',
    answers: ['ik roep'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλέω',
    answers: ['ik spreek'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρέω',
    answers: ['ik getuig'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοέω',
    answers: ['ik heb berouw', 'ik kom tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισέω',
    answers: ['ik haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιέω',
    answers: ['ik doe', 'ik maak'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρέω',
    answers: ['ik onderhoud'],
    type: 'woordenschat'
  },
  {
    question: 'φιλέω',
    answers: ['ik hou van', 'ik houd van', 'ik heb lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  }
]
const lesson4Vocabulary: LessonType = {
  id: 'lesson4-vocabulary',
  name: 'Les 4 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4Vocabulary
