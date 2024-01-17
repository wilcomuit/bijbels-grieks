const questions: Array<QuestionType> = [
  {
    question: 'κατοικοῦμεν',
    answers: ['wij wonen', 'wij bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλοῦμεν',
    answers: ['wij smeken', 'wij sporen aan', 'wij bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατοῦμεν',
    answers: ['wij gaan', 'wij wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνοῦμεν',
    answers: ['wij aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικοῦμεν',
    answers: ['wij doen kwaad', 'wij kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθοῦμεν',
    answers: ['wij volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενοῦμεν',
    answers: ['wij zijn zwak', 'wij zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμοῦμεν',
    answers: ['wij trouwen', 'wij huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δοῦμεν',
    answers: ['wij binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονοῦμεν',
    answers: ['wij dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκοῦμεν',
    answers: ['wij denken', 'wij lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεοῦμεν',
    answers: ['wij ontfermen ons'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστοῦμεν',
    answers: ['wij danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατοῦμεν',
    answers: ['wij houden vast', 'wij hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομοῦμεν',
    answers: ['wij bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνοῦμεν',
    answers: ['wij roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14WijConjugation: LessonType = {
  id: 'lesson14-wij-conjugation',
  name: 'Les 14 – Wij vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14WijConjugation
