const questions: Array<MixedQuestionType> = [
  {
    question: 'κατοικέω',
    answers: ['ik woon', 'ik bewoon'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλέω',
    answers: ['ik smeek', 'ik spoor aan', 'ik bemoedig'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατέω',
    answers: ['ik ga', 'ik wandel'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνέω',
    answers: ['ik aanbid'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικέω',
    answers: ['ik doe kwaad', 'ik kwets'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθέω',
    answers: ['ik volg'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενέω',
    answers: ['ik ben zwak', 'ik ben ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμέω',
    answers: ['ik trouw', 'ik huw'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δέω',
    answers: ['ik bind'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονέω',
    answers: ['ik dien'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκέω',
    answers: ['ik denk', 'ik lijk'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'δοκεῖ',
    answers: ['het lijkt'],
    explanation: '()',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεέω',
    answers: ['ik ontferm mij'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστέω',
    answers: ['ik dank'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατέω',
    answers: ['ik houd vast', 'ik heb macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομέω',
    answers: ['ik bouw'],
    type: 'woordenschat'
  },
  {
    question: 'φωνέω',
    answers: ['ik roep'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'οὗτος',
    answers: ['deze', 'dit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκεῖνος',
    answers: ['die', 'dat'],
    type: 'woordenschat'
  },
  {
    question: 'ὅλος',
    answers: ['heel'],
    explanation: '(holocaust)',
    type: 'woordenschat'
  }
]
const lesson14NewTheory: LessonType = {
  id: 'lesson14-theory-new',
  name: 'Les 14 – Volledige theorie (incompleet)',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14NewTheory
