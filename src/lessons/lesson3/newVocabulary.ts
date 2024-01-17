const questions: Array<QuestionType> = [
  {
    question: 'βάλλω',
    answers: ['ik werp'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπω',
    answers: ['ik zie'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκω',
    answers: ['ik weet', 'ik ken'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφω',
    answers: ['ik schrijf'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρω',
    answers: ['ik wek op'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίω',
    answers: ['ik eet'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκω',
    answers: ['ik vind'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχω',
    answers: ['ik heb'],
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύω',
    answers: ['ik genees', 'ik heel'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνω',
    answers: ['ik oordeel', 'ik scheid', 'ik onderscheid'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνω',
    answers: ['ik neem'],
    type: 'woordenschat'
  },
  {
    question: 'λέγω',
    answers: ['ik zeg'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύω',
    answers: ['ik maak los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένω',
    answers: ['ik blijf', 'ik begeleid', 'ik houd een optocht'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπω',
    answers: ['ik zend'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζω',
    answers: ['ik red'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  }
]
const lesson3NewVocabulary: LessonType = {
  id: 'lesson3-vocabulary-news',
  name: 'Les 3 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson3NewVocabulary
