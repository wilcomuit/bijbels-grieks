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
  },
  {
    question: 'αἰτεῖς',
    answers: ['jij vraagt', 'u vraagt'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖς',
    answers: ['jij lastert', 'u lastert', 'jij lastert God', 'u lastert God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖς',
    answers: ['jij zegent', 'u zegent'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖς',
    answers: ['jij zoekt', 'u zoekt'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖς',
    answers: ['jij kijkt', 'u kijkt', 'jij ziet', 'u ziet'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖς',
    answers: ['jij roept', 'u roept'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖς',
    answers: ['jij spreekt', 'u spreekt'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖς',
    answers: ['jij getuigt', 'u getuigt'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖς',
    answers: [
      'jij hebt berouw',
      'u heeft berouw',
      'jij komt tot andere gedachten',
      'u komt tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖς',
    answers: ['jij haat', 'u haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖς',
    answers: ['jij doet', 'u doet', 'jij maakt', 'u maakt'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖς',
    answers: ['jij onderhoudt', 'u onderhoudt'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖς',
    answers: ['jij houdt van', 'u houdt van', 'jij hebt lief', 'u heeft lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖ',
    answers: ['hij vraagt', 'zij vraagt', 'het vraagt'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖ',
    answers: [
      'hij lastert',
      'zij lastert',
      'het lastert',
      'hij lastert God',
      'zij lastert God',
      'het lastert God'
    ],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖ',
    answers: ['hij zegent', 'zij zegent', 'het zegent'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖ',
    answers: ['hij zoekt', 'zij zoekt', 'het zoekt'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖ',
    answers: ['hij kijkt', 'zij kijkt', 'het kijkt', 'hij ziet', 'zij ziet', 'het ziet'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖ',
    answers: ['hij roept', 'zij roept', 'het roept'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖ',
    answers: ['hij spreekt', 'zij spreekt', 'het spreekt'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖ',
    answers: ['hij getuigt', 'zij getuigt', 'het getuigt'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖ',
    answers: [
      'hij heeft berouw',
      'zij heeft berouw',
      'het heeft berouw',
      'hij komt tot andere gedachten',
      'zij komt tot andere gedachten',
      'het komt tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖ',
    answers: ['hij haat', 'zij haat', 'het haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖ',
    answers: ['hij doet', 'zij doet', 'het doet', 'hij maakt', 'zij maakt', 'het maakt'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖ',
    answers: ['hij onderhoudt', 'zij onderhoudt', 'het onderhoudt'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖ',
    answers: [
      'hij houdt van',
      'zij houdt van',
      'het houdt van',
      'hij heeft lief',
      'zij heeft lief',
      'het heeft lief'
    ],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
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
  },
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
  },
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
const lesson4NewTheory: LessonType = {
  id: 'lesson4-theory-new',
  name: 'Les 4 – Volledige theorie',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson4NewTheory
