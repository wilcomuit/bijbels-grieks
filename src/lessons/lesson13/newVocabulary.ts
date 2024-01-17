const questions: Array<QuestionType> = [
  {
    question: 'ἄγω',
    answers: ['ik leid', 'ik breng', 'ik ga'],
    explanation: '(Onovergankelijk: ik ga)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγω',
    answers: ['ik leid weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγω',
    answers: ['ik breng samen', 'ik verzamel'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγω',
    answers: ['ik vertrek'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρω',
    answers: ['ik draag'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρω',
    answers: ['ik breng', 'ik offer'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούω',
    answers: ['ik hoor'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούω',
    answers: ['ik gehoorzaam', 'ik luister naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκω',
    answers: ['ik lees'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκω',
    answers: ['ik herken'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκω',
    answers: ['ik sterf'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύω',
    answers: ['ik bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλω',
    answers: ['ik werp uit', 'ik gooi uit', 'ik zend uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύω',
    answers: ['ik kleed aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνω',
    answers: ['ik ontvang'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγω',
    answers: ['ik open'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκω',
    answers: ['ik leer', 'ik onderwijs'],
    type: 'woordenschat'
  },
  {
    question: 'διώκω',
    answers: ['ik vervolg'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίω',
    answers: ['ik ween'],
    type: 'woordenschat'
  },
  {
    question: 'πείθω',
    answers: ['ik overtuig'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύω',
    answers: ['ik loop over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύω',
    answers: ['ik geloof'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύω',
    answers: ['ik voorspel', 'ik profeteer'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρω',
    answers: ['ik verheug mij'],
    type: 'woordenschat'
  }
]
const lesson13NewVocabulary: LessonType = {
  id: 'lesson13-vocabulary-new',
  name: 'Les 13 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13NewVocabulary
