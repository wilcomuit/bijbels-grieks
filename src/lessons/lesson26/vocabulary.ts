const questions: Array<QuestionType> = [
  {
    question: 'αἴρω',
    answers: ['ik til op', 'ik neem weg'],
    type: 'woordenschat'
  },
  {
    question: 'σπείρω',
    answers: ['ik zaai'],
    explanation: '(het futurum wordt in het NT niet gebruikt)',
    type: 'woordenschat'
  },
  {
    question: 'ἀποκτείνω',
    answers: ['ik dood'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποστέλλω',
    answers: ['ik zend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀγγέλλω',
    answers: ['ik verkondig', 'ik kondig aan'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπαγγέλλω',
    answers: ['ik kondig af'],
    type: 'woordenschat'
  },
  {
    question: 'παραγγέλλω',
    answers: ['ik beveel'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ὀφείλω',
    answers: ['ik ben verschuldigd', 'ik zou moeten'],
    explanation: '(alleen in het presens en in het imperfectum)',
    type: 'woordenschat'
  },
  {
    question: 'ὅτι',
    answers: ['omdat', 'dat'],
    explanation: '(Vertaal eerst naar "dat", als dat niet werkt, vertaal met "omdat", kan ook een directe mededeling inleiden! Pas op' +
      ' dat dit lijkt op ὅτε)',
    type: 'woordenschat'
  },
  {
    question: 'ὅτε',
    answers: ['wanneer', 'toen'],
    explanation: '(Pas op dat dit lijkt op ὅτι)',
    type: 'woordenschat'
  }
]
const lesson26Vocabulary: LessonType = {
  id: 'lesson26-vocabulary',
  name: 'Les 26 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson26Vocabulary
