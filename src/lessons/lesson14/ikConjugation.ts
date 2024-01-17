const questions: Array<QuestionType> = [
  {
    question: 'κατοικῶ',
    answers: ['ik woon', 'ik bewoon'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλῶ',
    answers: ['ik smeek', 'ik spoor aan', 'ik bemoedig'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατῶ',
    answers: ['ik ga', 'ik wandel'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνῶ',
    answers: ['ik aanbid'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικῶ',
    answers: ['ik doe kwaad', 'ik kwets'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθῶ',
    answers: ['ik volg'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενῶ',
    answers: ['ik ben zwak', 'ik ben ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμῶ',
    answers: ['ik trouw', 'ik huw'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δῶ',
    answers: ['ik bind'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονῶ',
    answers: ['ik dien'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκῶ',
    answers: ['ik denk', 'ik lijk'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεῶ',
    answers: ['ik ontferm mij'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστῶ',
    answers: ['ik dank'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατῶ',
    answers: ['ik houd vast', 'ik heb macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομῶ',
    answers: ['ik bouw'],
    type: 'woordenschat'
  },
  {
    question: 'φωνῶ',
    answers: ['ik roep'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14IkConjugation: LessonType = {
  id: 'lesson14-ik-conjugation',
  name: 'Les 14 – Ik vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14IkConjugation
