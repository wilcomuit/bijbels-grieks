const questions: Array<QuestionType> = [
  {
    question: 'αἰτῶ',
    answers: ['ik vraag'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημῶ',
    answers: ['ik laster', 'ik laster God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογῶ',
    answers: ['ik zegen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητῶ',
    answers: ['ik zoek'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρῶ',
    answers: ['ik kijk', 'ik zie'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλῶ',
    answers: ['ik roep'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλῶ',
    answers: ['ik spreek'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρῶ',
    answers: ['ik getuig'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῶ',
    answers: ['ik heb berouw', 'ik kom tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισῶ',
    answers: ['ik haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιῶ',
    answers: ['ik doe', 'ik maak'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρῶ',
    answers: ['ik onderhoud'],
    type: 'woordenschat'
  },
  {
    question: 'φιλῶ',
    answers: ['ik hou van', 'ik houd van', 'ik heb lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  }
]
const lesson4IkConjugation: LessonType = {
  id: 'lesson4-ik-conjugation',
  name: 'Les 4 – Ik vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4IkConjugation
