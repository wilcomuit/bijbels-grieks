const questions: Array<QuestionType> = [
  {
    question: 'δύναμαι',
    answers: ['ik ben in staat', 'ik kan'],
    explanation: '(vgl. δυνατός)',
    type: 'woordenschat'
  },
  {
    question: 'θέλω',
    answers: ['ik wens'],
    type: 'woordenschat'
  },
  {
    question: 'μέλλω',
    answers: ['ik sta op het punt'],
    type: 'woordenschat'
  },
  {
    question: 'δεῖ',
    answers: ['het is nodig', 'noodzakelijk'],
    explanation: '(deontologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔξεστιν',
    answers: ['het is wettelijk', 'het is toegelaten'],
    explanation: '(ν is beweeglijk) (+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ὥστε',
    answers: ['met het resultaat dat', 'zo dat'],
    type: 'woordenschat'
  }
]
const lesson20Vocabulary: LessonType = {
  id: 'lesson20-vocabulary',
  name: 'Les 20 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson20Vocabulary
