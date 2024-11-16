const questions: Array<QuestionType> = [
  {
    question: 'κρείσσων',
    answers: ['beter'],
    type: 'woordenschat'
  },
  {
    question: 'μείζων',
    answers: ['groter'],
    type: 'woordenschat'
  },
  {
    question: 'πλείων',
    answers: ['meer'],
    explanation: '(pleonasme)',
    type: 'woordenschat'
  },
  {
    question: 'χείρων',
    answers: ['slechter'],
    type: 'woordenschat'
  },
  {
    question: 'ἀληθής',
    answers: ['waar'],
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενής',
    answers: ['zwak', 'ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'πλήρης',
    answers: ['vol'],
    type: 'woordenschat'
  },
  {
    question: 'τίς',
    answers: ['wie'],
    type: 'woordenschat'
  },
  {
    question: 'τί',
    answers: ['wat', 'waarom'],
    type: 'woordenschat'
  },
  {
    question: 'τις',
    answers: ['iemand', 'een of ander'],
    type: 'woordenschat'
  },
  {
    question: 'τινές',
    answers: ['sommigen', 'sommige'],
    type: 'woordenschat'
  },
  {
    question: 'τι',
    answers: ['iets'],
    type: 'woordenschat'
  },
  {
    question: 'ὅστις',
    answers: ['al wie', 'wie ook', 'om het even wie'],
    type: 'woordenschat'
  },
  {
    question: 'ἧτις',
    answers: ['al wie', 'wie ook', 'om het even wie'],
    type: 'woordenschat'
  },
  {
    question: 'ὅ τι',
    answers: ['al wat', 'wat ook', 'om het even wat'],
    type: 'woordenschat'
  }
]
const lesson30Vocabulary: LessonType = {
  id: 'lesson30-vocabulary',
  name: 'Les 30 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson30Vocabulary
