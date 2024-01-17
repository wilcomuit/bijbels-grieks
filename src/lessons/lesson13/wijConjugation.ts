const questions: Array<QuestionType> = [
  {
    question: 'ἄγομεν',
    answers: ['wij leiden', 'wij brengen', 'wij gaan'],
    explanation: '(Onovergankelijk: wij gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγομεν',
    answers: ['wij leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγομεν',
    answers: ['wij brengen samen', 'wij verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγομεν',
    answers: ['wij vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρομεν',
    answers: ['wij dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρομεν',
    answers: ['wij brengen', 'wij offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούομεν',
    answers: ['wij horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούομεν',
    answers: ['wij gehoorzamen', 'wij luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκομεν',
    answers: ['wij lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκομεν',
    answers: ['wij herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκομεν',
    answers: ['wij sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύομεν',
    answers: ['wij bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλομεν',
    answers: ['wij werpen uit', 'wij gooien uit', 'wij zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύομεν',
    answers: ['wij kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνομεν',
    answers: ['wij ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγομεν',
    answers: ['wij openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκομεν',
    answers: ['wij leren', 'wij onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκομεν',
    answers: ['wij vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίομεν',
    answers: ['wij wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθομεν',
    answers: ['wij overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύομεν',
    answers: ['wij lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύομεν',
    answers: ['wij geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύομεν',
    answers: ['wij voorspellen', 'wij profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρομεν',
    answers: ['wij verheugen ons'],
    type: 'woordenschat'
  }
]
const lesson13WijConjugation: LessonType = {
  id: 'lesson13-wij-conjugation',
  name: 'Les 13 – Wij vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13WijConjugation
