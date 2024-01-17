const questions: Array<QuestionType> = [
  {
    question: 'ἄγετε',
    answers: ['jullie leiden', 'jullie brengen', 'jullie gaan'],
    explanation: '(Onovergankelijk: jullie gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγετε',
    answers: ['jullie leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγετε',
    answers: ['jullie brengen samen', 'jullie verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγετε',
    answers: ['jullie vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρετε',
    answers: ['jullie dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρετε',
    answers: ['jullie brengen', 'jullie offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούετε',
    answers: ['jullie horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούετε',
    answers: ['jullie gehoorzamen', 'jullie luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκετε',
    answers: ['jullie lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκετε',
    answers: ['jullie herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκετε',
    answers: ['jullie sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύετε',
    answers: ['jullie bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλετε',
    answers: ['jullie werpen uit', 'jullie gooien uit', 'jullie zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύετε',
    answers: ['jullie kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνετε',
    answers: ['jullie ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγετε',
    answers: ['jullie openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκετε',
    answers: ['jullie leren', 'jullie onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκετε',
    answers: ['jullie vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίετε',
    answers: ['jullie wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθετε',
    answers: ['jullie overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύετε',
    answers: ['jullie lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύετε',
    answers: ['jullie geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύετε',
    answers: ['jullie voorspellen', 'jullie profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρετε',
    answers: ['jullie verheugen ons'],
    type: 'woordenschat'
  }
]
const lesson13JullieConjugation: LessonType = {
  id: 'lesson13-jullie-conjugation',
  name: 'Les 13 – Jullie vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13JullieConjugation
