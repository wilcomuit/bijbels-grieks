const questions: Array<QuestionType> = [
  {
    question: 'μικρός',
    answers: ['klein', 'weinig'],
    explanation: '(microbe, microscoop, omicron)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλάχιστος',
    answers: ['kleinst', 'minst'],
    type: 'woordenschat'
  },
  {
    question: 'μᾶλλον',
    answers: ['meer', 'eerder'],
    type: 'woordenschat'
  },
  {
    question: 'μάλιστα',
    answers: ['meest', 'vooral'],
    type: 'woordenschat'
  },
  {
    question: 'ἀληθῶς',
    answers: ['waarlijk', 'waarachtig'],
    type: 'woordenschat'
  },
  {
    question: 'καλῶς',
    answers: ['goed'],
    type: 'woordenschat'
  },
  {
    question: 'ὁμοίως',
    answers: ['op dezelfde manier', 'op gelijkaardige wijze'],
    type: 'woordenschat'
  },
  {
    question: 'οὕτως',
    answers: ['op deze wijze', 'dus', 'zo'],
    type: 'woordenschat'
  },
  {
    question: 'ἀμήν',
    answers: ['waarlijk', "amen"],
    type: 'woordenschat'
  },
  {
    question: 'εὖ',
    answers: ['goed'],
    explanation: '(eubiotiek, eudemonisme)',
    type: 'woordenschat'
  },
  {
    question: 'ναί',
    answers: ['ja'],
    type: 'woordenschat'
  },
  {
    question: 'οὐαί',
    answers: ['helaas', 'ach'],
    type: 'woordenschat'
  },
  {
    question: 'ἤ',
    answers: ['dan', 'of'],
    explanation: '(dan = comparatief, of = disjunctief)',
    type: 'woordenschat'
  }
]
const lesson33Vocabulary: LessonType = {
  id: 'lesson33-vocabulary',
  name: 'Les 33 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson33Vocabulary
