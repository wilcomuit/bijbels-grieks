const questions: Array<QuestionType> = [
  {
    question: 'ἄγουσιν',
    answers: ['ze leiden', 'zij leiden', 'ze brengen', 'zij brengen', 'ze gaan', 'zij gaan'],
    explanation: '(Onovergankelijk: ze gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγουσιν',
    answers: ['ze leiden weg', 'zij leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγουσιν',
    answers: ['ze brengen samen', 'zij brengen samen', 'ze verzamelen', 'zij verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγουσιν',
    answers: ['ze vertrekken', 'zij vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρουσιν',
    answers: ['ze dragen', 'zij dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρουσιν',
    answers: ['ze brengen', 'zij brengen', 'ze offeren', 'zij offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούουσιν',
    answers: ['ze horen', 'zij horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούουσιν',
    answers: ['ze gehoorzamen', 'zij gehoorzamen', 'ze luisteren naar', 'zij luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκουσιν',
    answers: ['ze lezen', 'zij lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκουσιν',
    answers: ['ze herkennen', 'zij herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκουσιν',
    answers: ['ze sterven', 'zij sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύουσιν',
    answers: ['ze bevrijden', 'zij bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλουσιν',
    answers: ['ze werpen uit', 'zij werpen uit', 'ze gooien uit', 'zij gooien uit', 'ze zenden uit', 'zij zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύουσιν',
    answers: ['ze kleden aan', 'zij kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνουσιν',
    answers: ['ze ontvangen', 'zij ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγουσιν',
    answers: ['ze openen', 'zij openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκουσιν',
    answers: ['ze leren', 'zij leren', 'ze onderwijzen', 'zij onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκουσιν',
    answers: ['ze vervolgen', 'zij vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίουσιν',
    answers: ['ze wenen', 'zij wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθουσιν',
    answers: ['ze overtuigen', 'zij overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύουσιν',
    answers: ['ze lopen over', 'zij lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύουσιν',
    answers: ['ze geloven', 'zij geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύουσιν',
    answers: ['ze voorspellen', 'zij voorspellen', 'ze profeteren', 'zij profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρουσιν',
    answers: ['ze verheugen zich', 'zij verheugen zich'],
    type: 'woordenschat'
  }
]
const lesson13ZijConjugation: LessonType = {
  id: 'lesson13-zij-conjugation',
  name: 'Les 13 – Zij/ze vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13ZijConjugation
