const questions: Array<QuestionType> = [
  {
    question: 'ὅς',
    answers: ['die', 'dat'],
    explanation: '(betrekkelijk voornaamwoord)',
    type: 'woordenschat'
  },
  {
    question: 'ἥ',
    answers: ['die', 'dat'],
    explanation: '(betrekkelijk voornaamwoord)',
    type: 'woordenschat'
  },
  {
    question: 'ὅ',
    answers: ['die', 'dat'],
    explanation: '(betrekkelijk voornaamwoord)',
    type: 'woordenschat'
  },
  {
    question: 'διό',
    answers: ['daarom', 'dus'],
    explanation: "(δι᾽ ὃ, 'om wille van')",
    type: 'woordenschat'
  },
  {
    question: 'μή',
    answers: ['niet'],
    explanation: '(bij alle wijzen behalve de indicatief)',
    type: 'woordenschat'
  },
  {
    question: 'μητί',
    answers: ['niet', 'of toch'],
    explanation: '(... of toch)',
    type: 'woordenschat'
  },
  {
    question: 'οὐχί',
    answers: ['of niet soms'],
    explanation: '(kan ook οὐ)',
    type: 'woordenschat'
  },
  {
    question: 'μηδέ',
    answers: ['en niet', 'noch', 'zelfs niet'],
    type: 'woordenschat'
  },
  {
    question: 'τέ',
    answers: ['en'],
    explanation: '(maar een nauwer band dan καί) (vgl. Latijn: -que)',
    type: 'woordenschat'
  },
  {
    question: 'οὔτε',
    answers: ['en niet', 'noch'],
    explanation: "(heeft nooit de betekenis 'zelfs niet' en komt meestal voor in de combinatie noch ... noch)",
    type: 'woordenschat'
  },
  {
    question: 'μήτε',
    answers: ['en niet', 'noch'],
    explanation: "(heeft nooit de betekenis 'zelfs niet' en komt meestal voor in de combinatie noch ... noch)",
    type: 'woordenschat'
  },
]
const lesson18Vocabulary: LessonType = {
  id: 'lesson18-vocabulary',
  name: 'Les 18 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson18Vocabulary
