const questions: Array<QuestionType> = [
  {
    question: 'βάλλεις',
    answers: ['jij werpt', 'u werpt'],
    explanation: 'jij/u werpt',
    type: 'woordenschat'
  },
  {
    question: 'βλέπεις',
    answers: ['jij ziet', 'u ziet'],
    explanation: 'jij/u ziet',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκεις',
    answers: ['jij weet', 'u weet', 'jij kent', 'u kent'],
    explanation: 'jij/u weet, jij/u kent (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφεις',
    answers: ['jij schrijft', 'u schrijft'],
    explanation: 'jij schrijft, u schrijft (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρεις',
    answers: ['jij wekt op', 'u wekt op'],
    explanation: 'jij/u wekt op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίεις',
    answers: ['jij eet', 'u eet'],
    explanation: 'jij/u eet',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκεις',
    answers: ['jij vindt', 'u vindt'],
    explanation: 'jij/u vindt (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχεις',
    answers: ['jij hebt', 'u hebt', 'u heeft'],
    explanation: 'jij/u hebt, u heeft',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύεις',
    answers: ['jij geneest', 'u geneest', 'jij heelt', 'u heelt'],
    explanation: 'jij/u geneest, jij/u heelt (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνεις',
    answers: [
      'jij oordeelt',
      'u oordeelt',
      'jij scheidt',
      'u scheidt',
      'jij onderscheidt',
      'u onderscheidt'
    ],
    explanation: 'jij/u oordeelt, jij/u scheid, jij/u onderscheidt (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνεις',
    answers: ['jij neemt', 'u neemt'],
    explanation: 'jij/u neemt',
    type: 'woordenschat'
  },
  {
    question: 'λέγεις',
    answers: ['jij zegt', 'u zegt'],
    explanation: 'jij/u zegt (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύεις',
    answers: ['jij maakt los', 'u maakt los'],
    explanation: 'jij/u maakt los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένεις',
    answers: [
      'jij blijft',
      'u blijft',
      'jij begeleidt',
      'u begeleidt',
      'jij houdt een optocht',
      'u houdt een optocht'
    ],
    explanation: 'jij/u blijf, jij/u begeleidt, jij/u houdt een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπεις',
    answers: ['jij zendt', 'u zendt'],
    explanation: 'jij/u zendt',
    type: 'woordenschat'
  },
  {
    question: 'σῴζεις',
    answers: ['jij redt', 'u redt'],
    explanation: 'jij/u redt (soteriologie)',
    type: 'woordenschat'
  }
]
const lesson3JijConjugation: LessonType = {
  id: 'lesson3-jij-conjugation',
  name: 'Les 3 – Jij/u vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson3JijConjugation
