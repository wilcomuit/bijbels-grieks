const questions: Array<QuestionType> = [
  {
    question: 'βάλλει',
    answers: ['hij werpt', 'zij werpt', 'het werpt'],
    explanation: 'hij/zij/het werpt',
    type: 'woordenschat'
  },
  {
    question: 'βλέπει',
    answers: ['hij ziet', 'zij ziet', 'het ziet'],
    explanation: 'hij/zij/het ziet',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκει',
    answers: ['hij weet', 'zij weet', 'het weet', 'hij kent', 'zij kent', 'het kent'],
    explanation: 'hij/zij/het weet, hij/zij/het kent (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφει',
    answers: ['hij schrijft', 'zij schrijft', 'het schrijft'],
    explanation: 'hij/zij/het schrijft (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρει',
    answers: ['hij wekt op', 'zij wekt op', 'het wekt op'],
    explanation: 'hij/zij/het wekt op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίει',
    answers: ['hij eet', 'zij eet', 'het eet'],
    explanation: 'hij/zij/het eet',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκει',
    answers: ['hij vindt', 'zij vindt', 'het vindt'],
    explanation: 'hij/zij/het vindt (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχει',
    answers: ['hij heeft', 'zij heeft', 'het heeft'],
    explanation: 'hij/zij/het heeft',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύει',
    answers: ['hij geneest', 'zij geneest', 'het geneest', 'hij heelt', 'zij heelt', 'het heelt'],
    explanation: 'hij/zij/het geneest, hij/zij/het heelt (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνει',
    answers: [
      'hij oordeelt',
      'zij oordeelt',
      'het oordeelt',
      'hij scheidt',
      'zij scheidt',
      'het scheidt',
      'hij onderscheidt',
      'zij onderscheidt',
      'het onderscheidt'
    ],
    explanation: 'hij/zij/het oordeelt, hij/zij/het scheidt, hij/zij/het onderscheidt (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνει',
    answers: ['hij neemt', 'zij neemt', 'het neemt'],
    explanation: 'hij/zij/het neemt',
    type: 'woordenschat'
  },
  {
    question: 'λέγει',
    answers: ['hij zegt', 'zij zegt', 'het zegt'],
    explanation: 'hij/zij/het zegt (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύει',
    answers: ['hij maakt los', 'zij maakt los', 'het maakt los'],
    explanation:
      'hij/zij/het maakt los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένει',
    answers: [
      'hij blijft',
      'zij blijft',
      'het blijft',
      'hij begeleidt',
      'zij begeleidt',
      'het begeleidt',
      'hij houdt een optocht',
      'zij houdt een optocht',
      'het houdt een optocht'
    ],
    explanation:
      'hij/zij/het blijft, hij/zij/het begeleidt, hij/zij/het houdt een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπει',
    answers: ['hij zendt', 'zij zendt', 'het zendt'],
    explanation: 'hij/zij/het zendt',
    type: 'woordenschat'
  },
  {
    question: 'σῴζει',
    answers: ['hij redt', 'zij redt', 'het redt'],
    explanation: 'hij/zij/het redt (soteriologie)',
    type: 'woordenschat'
  }
]
const lesson3HijConjugation: LessonType = {
  id: 'lesson3-hij-conjugation',
  name: 'Les 3 – Hij/zij/het vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson3HijConjugation
