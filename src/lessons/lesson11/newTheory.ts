const questions: Array<MixedQuestionType> = [
  {
    question: 'ἀγαθός',
    answers: ['goed'],
    type: 'woordenschat'
  },
  {
    question: 'ἀγαπητός',
    answers: ['geliefd'],
    type: 'woordenschat'
  },
  {
    question: 'δυνατός',
    answers: ['machtig', 'mogelijk'],
    explanation: '(dynamo)',
    type: 'woordenschat'
  },
  {
    question: 'ἕκαστος',
    answers: ['ieder', 'elk'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσχατος',
    answers: ['laatst'],
    explanation: '(eschatologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἱκανός',
    answers: ['bekwaam', 'voldoende'],
    type: 'woordenschat'
  },
  {
    question: 'καινός',
    answers: ['nieuw'],
    type: 'woordenschat'
  },
  {
    question: 'κακός',
    answers: ['slecht'],
    explanation: '(kakafonie))',
    type: 'woordenschat'
  },
  {
    question: 'καλός',
    answers: ['mooi'],
    explanation: '(kalligraferen)',
    type: 'woordenschat'
  },
  {
    question: 'λοιπός',
    answers: ['resterend', 'overig'],
    type: 'woordenschat'
  },
  {
    question: 'μέσος',
    answers: ['midden', 'middelste'],
    explanation: '(Mesopothamië)',
    type: 'woordenschat'
  },
  {
    question: 'μόνος',
    answers: ['alleen', 'enig'],
    explanation:
      '(de vorm van de accusatief onzijdig μόνον wordt vaak als bijwoord gebruikt) (monoloog)',
    type: 'woordenschat'
  },
  {
    question: 'ὀλίγος',
    answers: ['klein', 'weinige'],
    explanation: '(meervoud: weinige (oligarchie))',
    type: 'woordenschat'
  },
  {
    question: 'πιστός',
    answers: ['gelovig'],
    type: 'woordenschat'
  },
  {
    question: 'πρῶτος',
    answers: ['eerste'],
    explanation: '(protocol)',
    type: 'woordenschat'
  },
  {
    question: 'τρίτος',
    answers: ['derde'],
    type: 'woordenschat'
  },
  {
    question: 'πτωχός',
    answers: ['arm'],
    type: 'woordenschat'
  },
  {
    question: 'σοφός',
    answers: ['wijs', 'verstandig'],
    explanation: '(sofist)',
    type: 'woordenschat'
  },
  {
    question: 'τυφλός',
    answers: ['blind'],
    type: 'woordenschat'
  },
  {
    question: 'ἄπιστος',
    answers: ['ongelovig'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκάθαρτος',
    answers: ['onzuiver'],
    type: 'woordenschat'
  },
  {
    question: 'αἰώνιος',
    answers: ['eeuwig'],
    explanation: '(αἰώνιος ζωή: eeuwig leven)',
    type: 'woordenschat'
  }
]
const lesson11NewTheory: LessonType = {
  id: 'lesson11-theory-new',
  name: 'Les 11 – Volledige theorie (incompleet)',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson11NewTheory
