const questions: Array<QuestionType> = [
  {
    question: 'ἅγιος',
    answers: ['heilig'],
    explanation: '(hagiografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἄξιος',
    answers: ['waardig'],
    explanation: '(axioma)',
    type: 'woordenschat'
  },
  {
    question: 'δεξιός',
    answers: ['rechts'],
    type: 'woordenschat'
  },
  {
    question: 'δεύτερος',
    answers: ['tweede'],
    explanation: '(deuteronomium)',
    type: 'woordenschat'
  },
  {
    question: 'δίκαιος',
    answers: ['rechtvaardig'],
    type: 'woordenschat'
  },
  {
    question: 'ἐλεύθερος',
    answers: ['vrij'],
    type: 'woordenschat'
  },
  {
    question: 'ἕτερος',
    answers: ['ander'],
    explanation: '(heteroseksueel)',
    type: 'woordenschat'
  },
  {
    question: 'ἴδιος',
    answers: ['eigen'],
    explanation:
      "(normaal gebruikt met het lidwoord en zonder persoonlijk voornaamwoord. ὁ ἴδιος betekent dus 'mijn eigen', 'uw eigen' enz. volgens de context) (idioom = taaleigen)",
    type: 'woordenschat'
  },
  {
    question: 'ἰσχυρός',
    answers: ['sterk'],
    type: 'woordenschat'
  },
  {
    question: 'καθαρός',
    answers: ['zuiver'],
    explanation: '(katharen)',
    type: 'woordenschat'
  },
  {
    question: 'μακάριος',
    answers: ['gezegend', 'blij', 'zalig'],
    type: 'woordenschat'
  },
  {
    question: 'μικρός',
    answers: ['klein'],
    explanation: '(mikroscoop)',
    type: 'woordenschat'
  },
  {
    question: 'νεκρός',
    answers: ['dood'],
    explanation: '(necrologie, nekrofiel, nekrose)',
    type: 'woordenschat'
  },
  {
    question: 'νέος',
    answers: ['nieuw', 'jong'],
    explanation: '(neontologie)',
    type: 'woordenschat'
  },
  {
    question: 'παλαιός',
    answers: ['oud'],
    explanation: '(paleontologie)',
    type: 'woordenschat'
  },
  {
    question: 'πλούσιος',
    answers: ['rijk'],
    type: 'woordenschat'
  },
  {
    question: 'πονηρός',
    answers: ['kwaad'],
    type: 'woordenschat'
  },
  {
    question: 'ὁμοῖος',
    answers: ['gelijk'],
    explanation: '(homoloog, homoniem, homoseksueel)',
    type: 'woordenschat'
  },
  {
    question: 'εἰμι',
    answers: ['ik ben'],
    explanation: '(vgl. Engels: I am)',
    type: 'woordenschat'
  },
  {
    question: 'εἶ',
    answers: ['je bent', 'jij bent', 'u bent'],
    type: 'woordenschat'
  },
  {
    question: 'ἐστίν',
    answers: ['is', 'hij is', 'ze is', 'zij is', 'het is'],
    explanation: '(Ook wel: ἐστί)',
    type: 'woordenschat'
  },
  {
    question: 'ἐσμέν',
    answers: ['we zijn', 'wij zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἐστέ',
    answers: ['jullie zijn'],
    type: 'woordenschat'
  },
  {
    question: 'εἰσίν',
    answers: ['ze zijn', 'zij zijn'],
    explanation: '(Ook wel: εἰσί)',
    type: 'woordenschat'
  }
]
const lesson12NewVocabulary: LessonType = {
  id: 'lesson12-vocabulary-new',
  name: 'Les 12 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson12NewVocabulary
