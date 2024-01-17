const questions: Array<QuestionType> = [
  {
    question: 'κατοικεῖ',
    answers: ['hij woont', 'zij woont', 'het woont', 'hij bewoont', 'zij bewoont', 'het bewoont'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλεῖ',
    answers: ['hij smeekt', 'zij smeekt', 'het smeekt', 'hij spoort aan', 'zij spoort aan', 'het spoort aan', 'hij bemoedigt', 'zij' +
    ' bemoedigt', 'het bemoedigt'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατεῖ',
    answers: ['hij gaat', 'zij gaat', 'het gaat', 'hij wandelt', 'zij wandelt', 'het wandelt'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνεῖ',
    answers: ['hij aanbidt', 'zij aanbidt', 'het aanbidt'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικεῖ',
    answers: ['hij doet kwaad', 'zij doet kwaad', 'het doet kwaad', 'hij kwetst', 'zij kwetst', 'het kwetst'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθεῖ',
    answers: ['hij volgt', 'zij volgt', 'het volgt'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενεῖ',
    answers: ['hij is zwak', 'zij is zwak', 'het is zwak', 'hij is ziek', 'zij is ziek', 'het is ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμεῖ',
    answers: ['hij trouwt', 'zij trouwt', 'het trouwt', 'hij huwt', 'zij huwt', 'het huwt'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δεῖ',
    answers: ['hij bindt', 'zij bindt', 'het bindt'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονεῖ',
    answers: ['hij dient', 'zij dient', 'het dient'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκεῖ',
    answers: ['hij denkt', 'zij denkt', 'het denkt', 'hij lijkt', 'zij lijkt', 'het lijkt'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεεῖ',
    answers: ['hij ontfermt zich', 'zij ontfermt zich', 'het ontfermt zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστεῖ',
    answers: ['hij dankt', 'zij dankt', 'het dankt'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατεῖ',
    answers: ['hij houdt vast', 'zij houdt vast', 'het houdt vast', 'hij heeft macht', 'zij heeft macht', 'het heeft macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομεῖ',
    answers: ['hij bouwt', 'zij bouwt', 'het bouwt'],
    type: 'woordenschat'
  },
  {
    question: 'φωνεῖ',
    answers: ['hij roept', 'zij roept', 'het roept'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14HijConjugation: LessonType = {
  id: 'lesson14-hij-conjugation',
  name: 'Les 14 – Hij/zij/het vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14HijConjugation
