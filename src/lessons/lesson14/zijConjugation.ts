const questions: Array<QuestionType> = [
  {
    question: 'κατοικοῦσιν',
    answers: ['zij wonen', 'ze wonen', 'zij bewonen', 'ze bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλοῦσιν',
    answers: ['zij smeken', 'ze smeken', 'zij sporen aan', 'ze sporen aan', 'zij bemoedigen', 'ze bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατοῦσιν',
    answers: ['ze gaan', 'zij gaan', 'ze wandelen', 'zij wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνοῦσιν',
    answers: ['ze aanbidden', 'zij aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικοῦσιν',
    answers: ['ze doen kwaad', 'zij doen kwaad', 'ze kwetsen', 'zij kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθοῦσιν',
    answers: ['ze volgen', 'zij volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενοῦσιν',
    answers: ['ze zijn zwak', 'zij zijn zwak', 'ze zijn ziek', 'zij zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμοῦσιν',
    answers: ['ze trouwen', 'zij trouwen', 'ze huwen', 'zij huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δοῦσιν',
    answers: ['ze binden', 'zij binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονοῦσιν',
    answers: ['ze dienen', 'zij dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκοῦσιν',
    answers: ['ze denken', 'zij denken', 'ze lijken', 'zij lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεοῦσιν',
    answers: ['ze ontfermen zich', 'zij ontfermen zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστοῦσιν',
    answers: ['ze danken', 'zij danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατοῦσιν',
    answers: ['ze houden vast', 'zij houden vast', 'ze hebben macht', 'zij hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομοῦσιν',
    answers: ['ze bouwen', 'zij bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνοῦσιν',
    answers: ['ze roepen', 'zij roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14ZijConjugation: LessonType = {
  id: 'lesson14-zij-conjugation',
  name: 'Les 14 – Zij/ze vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14ZijConjugation
