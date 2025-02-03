const questions: Array<QuestionType> = [
  {
    question: 'οἶδα',
    answers: ['ik ken', 'ik weet'],
    type: 'woordenschat'
  },
  {
    question: 'ᾔδειν',
    answers: ['ik kende', 'ik wist'],
    explanation: '(plusquamperfectum)',
    type: 'woordenschat'
  },
  {
    question: 'εἰδέναι',
    answers: ['kennen', 'weten'],
    explanation: '(infinitief)',
    type: 'woordenschat'
  },
  {
    question: 'εἰδώς',
    answers: ['kennend', 'wetend'],
    explanation: '(deelwoord)',
    type: 'woordenschat'
  },
  {
    question: 'κάθημαι',
    answers: ['ik zit'],
    explanation: '(vgl. katheder)',
    type: 'woordenschat'
  },
  {
    question: 'κεῖμαι',
    answers: ['ik lig'],
    type: 'woordenschat'
  },
  {
    question: 'κατάκειμαι',
    answers: ['neerliggen op zijn elleboog'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνάκειμαι',
    answers: ['zich op zijn elleboog oprichten'],
    type: 'woordenschat'
  },
  {
    question: 'συνανάκειμαι',
    answers: ['aan de tafel aanliggen samen met'],
    type: 'woordenschat'
  }
]
const lesson34Vocabulary: LessonType = {
  id: 'lesson34-vocabulary',
  name: 'Les 34 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson34Vocabulary
