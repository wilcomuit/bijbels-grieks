const questions: Array<QuestionType> = [
  {
    question: 'κατοικεῖτε',
    answers: ['jullie wonen', 'jullie bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλεῖτε',
    answers: ['jullie smeken', 'jullie sporen aan', 'jullie bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατεῖτε',
    answers: ['jullie gaan', 'jullie wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνεῖτε',
    answers: ['jullie aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικεῖτε',
    answers: ['jullie doen kwaad', 'jullie kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθεῖτε',
    answers: ['jullie volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενεῖτε',
    answers: ['jullie zijn zwak', 'jullie zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμεῖτε',
    answers: ['jullie trouwen', 'jullie huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δεῖτε',
    answers: ['jullie binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονεῖτε',
    answers: ['jullie dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκεῖτε',
    answers: ['jullie denken', 'jullie lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεεῖτε',
    answers: ['jullie ontfermen ons'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστεῖτε',
    answers: ['jullie danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατεῖτε',
    answers: ['jullie houden vast', 'jullie hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομεῖτε',
    answers: ['jullie bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνεῖτε',
    answers: ['jullie roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14JullieConjugation: LessonType = {
  id: 'lesson14-jullie-conjugation',
  name: 'Les 14 – Jullie vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14JullieConjugation
