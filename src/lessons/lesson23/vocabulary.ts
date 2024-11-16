const questions: Array<QuestionType> = [
  {
    question: 'ἔσομαι',
    answers: ['ik zal zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσῃ',
    answers: ['je zal zijn', 'jij zal zijn', 'u zal zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσται',
    answers: ['hij zal zijn', 'ze zal zijn', 'zij zal zijn', 'het zal zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσόμεθα',
    answers: ['we zullen zijn', 'wij zullen zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσεσθε',
    answers: ['jullie zullen zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσονται',
    answers: ['ze zullen zijn', 'zij zullen zijn'],
    type: 'woordenschat'
  },
  {
    question: 'ἄρχω',
    answers: ['ik regeer'],
    explanation: '(+ genitief)',
    type: 'woordenschat'
  },
  {
    question: 'ἄρχομαι',
    answers: ['ik begin'],
    type: 'woordenschat'
  },
  {
    question: 'ὑπάρχω',
    answers: ['ik ben', 'ik besta', 'ik behoor aan'],
    type: 'woordenschat'
  },
  {
    question: 'ἅπτομαι',
    answers: ['ik grijp vast', 'ik houd vast', 'ik raak aan'],
    explanation: '(+ genitief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀρνέομαι',
    answers: ['ik ontken'],
    type: 'woordenschat'
  },
  {
    question: 'ἀσπάζομαι',
    answers: ['ik groet'],
    type: 'woordenschat'
  },
  {
    question: 'δέχομαι',
    answers: ['ik ontvang'],
    explanation: '(gelijk in de betekenis aan παραλαμβάνω, maar dit kan ook "ik neem mee" betekenen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐργάζομαι',
    answers: ['ik werk'],
    type: 'woordenschat'
  },
  {
    question: 'ἔρχομαι',
    answers: ['ik kom'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπέρχομαι',
    answers: ['ik ga weg'],
    type: 'woordenschat'
  },
  {
    question: 'διέρχομαι',
    answers: ['ik ga doorheen'],
    type: 'woordenschat'
  },
  {
    question: 'εἰσέρχομαι',
    answers: ['ik ga', 'ik kom binnen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξέρχομαι',
    answers: ['ik ga buiten'],
    type: 'woordenschat'
  },
  {
    question: 'προσέρχομαι',
    answers: ['ik kom naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'συνέρχομαι',
    answers: ['ik vergader'],
    type: 'woordenschat'
  },
  {
    question: 'εὐαγγελίχομαι',
    answers: ['ik breng goed nieuws', 'ik verkondig het evangelie'],
    type: 'woordenschat'
  },
  {
    question: 'λογίζομαι',
    answers: ['ik tel'],
    explanation: '(λόγος betekent soms rekening)',
    type: 'woordenschat'
  },
  {
    question: 'προσεύχομαι',
    answers: ['ik bid'],
    type: 'woordenschat'
  },
  {
    question: 'βούλομαι',
    answers: ['ik wil', 'ik wens'],
    explanation: '= θελω',
    type: 'woordenschat'
  },
  {
    question: 'φοβέομαι',
    answers: ['ik vrees', 'ik heb schrik'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποκρίνομαι',
    answers: ['ik antwoord'],
    type: 'woordenschat'
  },
  {
    question: 'γίνομαι',
    answers: ['ik word', 'ik ben'],
    explanation: '(soms "ik ben")',
    type: 'woordenschat'
  },
  {
    question: 'παραγίνομαι',
    answers: ['ik ben naast', 'ik kom'],
    type: 'woordenschat'
  },
  {
    question: 'πορεύομαι',
    answers: ['ik ga', 'ik kom'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκπορεύομαι',
    answers: ['ik ga buiten'],
    type: 'woordenschat'
  }
]
const lesson23Vocabulary: LessonType = {
  id: 'lesson23-vocabulary',
  name: 'Les 23 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson23Vocabulary
