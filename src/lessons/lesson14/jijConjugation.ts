const questions: Array<QuestionType> = [
  {
    question: 'κατοικεῖς',
    answers: ['jij woont', 'u woont', 'jij bewoont', 'u bewoont'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλεῖς',
    answers: ['jij smeekt', 'u smeekt', 'jij spoort aan', 'u spoort aan', 'jij bemoedigt', 'u bemoedigt'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατεῖς',
    answers: ['jij gaat', 'u gaat', 'jij wandelt', 'u wandelt'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνεῖς',
    answers: ['jij aanbidt', 'u aanbidt'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικεῖς',
    answers: ['jij doet kwaad', 'u doet kwaad', 'jij kwetst', 'u kwetst'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθεῖς',
    answers: ['jij volgt', 'u volgt'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενεῖς',
    answers: ['jij bent zwak', 'u bent zwak', 'jij bent ziek', 'u bent ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμεῖς',
    answers: ['jij trouwt', 'u trouwt', 'jij huwt', 'u huwt'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δεῖς',
    answers: ['jij bindt', 'u bindt'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονεῖς',
    answers: ['jij dient', 'u dient'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκεῖς',
    answers: ['jij denkt', 'u denkt', 'jij lijkt', 'u lijkt'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεεῖς',
    answers: ['jij ontfermt je', 'u ontfermt zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστεῖς',
    answers: ['jij dankt', 'u dankt'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατεῖς',
    answers: ['jij houdt vast', 'u houdt vast', 'jij hebt macht', 'u hebt macht', 'u heeft macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομεῖς',
    answers: ['jij bouwt', 'u bouwt'],
    type: 'woordenschat'
  },
  {
    question: 'φωνεῖς',
    answers: ['jij roept', 'u roept'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14JijConjugation: LessonType = {
  id: 'lesson14-jij-conjugation',
  name: 'Les 14 – Jij/u vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14JijConjugation
