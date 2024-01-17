const questions: Array<QuestionType> = [
  {
    question: 'ἤμην',
    answers: ['ik was'],
    type: 'woordenschat'
  },
  {
    question: 'ἦς',
    answers: ['je was', 'jij was', 'u was'],
    type: 'woordenschat'
  },
  {
    question: 'ἦσθα',
    answers: ['je was', 'jij was', 'u was'],
    type: 'woordenschat'
  },
  {
    question: 'ἦν',
    answers: ['hij was', 'ze was', 'zij was', 'het was'],
    type: 'woordenschat'
  },
  {
    question: 'ἦμεν',
    answers: ['we waren', 'wij waren'],
    type: 'woordenschat'
  },
  {
    question: 'ἦμεθα',
    answers: ['we waren', 'wij waren'],
    type: 'woordenschat'
  },
  {
    question: 'ἦτε',
    answers: ['jullie waren'],
    type: 'woordenschat'
  },
  {
    question: 'ἦσαν',
    answers: ['ze waren', 'zij waren'],
    type: 'woordenschat'
  },
  {
    question: 'ἄλλος',
    answers: ['ander', 'andere'],
    explanation: '(allochtoon)',
    type: 'woordenschat'
  },
  {
    question: 'ἀλλήλους',
    answers: ['elkaar'],
    explanation: '(parallel)',
    type: 'woordenschat'
  },
  {
    question: 'αὐτός',
    answers: ['hij', 'zij', 'het', 'zelf'],
    explanation:
      '(persoonlijk voornaamwoord: hij, zij, het; beklemtonend voornaamwoord: zelf (automobiel))',
    type: 'woordenschat'
  },
  {
    question: 'ἑαυτόν',
    answers: ['zichzelf'],
    explanation: '(wedekerend (reflexief) voornaamwoord)',
    type: 'woordenschat'
  }
]
const lesson15NewVocabulary: LessonType = {
  id: 'lesson15-vocabulary-new',
  name: 'Les 15 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson15NewVocabulary
