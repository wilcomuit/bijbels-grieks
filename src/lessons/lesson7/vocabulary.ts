const questions: Array<QuestionType> = [
  {
    question: 'ἀργύριον',
    answers: ['zilver', 'geld'],
    type: 'woordenschat'
  },
  {
    question: 'βιβλίον',
    answers: ['boek'],
    explanation: '(Bijbel, bibliofiel, bibliografie, bibliotheek)',
    type: 'woordenschat'
  },
  {
    question: 'δαιμόνιον',
    answers: ['demon'],
    type: 'woordenschat'
  },
  {
    question: 'δένδρον',
    answers: ['boom'],
    explanation: '(rododendron = rozeboom)',
    type: 'woordenschat'
  },
  {
    question: 'ἔργον',
    answers: ['werk'],
    explanation: '(ergonomisch, ergotherapie)',
    type: 'woordenschat'
  },
  {
    question: 'εὐαγγέλιον',
    answers: ['evangelie'],
    type: 'woordenschat'
  },
  {
    question: 'ἱερόν',
    answers: ['tempel', 'heiligdom'],
    explanation: '(hiërarchie = systeem van heilige gezagsdragers)',
    type: 'woordenschat'
  },
  {
    question: 'ἱμάτιον',
    answers: ['kledingstuk', 'kleren'],
    explanation: '(kleren = meervoud)',
    type: 'woordenschat'
  },
  {
    question: 'μνημεῖον',
    answers: ['graf'],
    explanation: '(plaats waar de mensen de doden gedenken)',
    type: 'woordenschat'
  },
  {
    question: 'μυστήριον',
    answers: ['geheim'],
    explanation: '(mysterie)',
    type: 'woordenschat'
  },
  {
    question: 'παιδίον',
    answers: ['kind'],
    explanation:
      '(pedagogie, pediatrisch) (-ιον beantwoordt aan de Nederlandse uitgang -je, maar vaak is er geen betekenis van verkleiningsvorm)',
    type: 'woordenschat'
  },
  {
    question: 'τέκνον',
    answers: ['kind'],
    type: 'woordenschat'
  },
  {
    question: 'πλοῖον',
    answers: ['schip', 'boot'],
    type: 'woordenschat'
  },
  {
    question: 'ποτήριον',
    answers: ['beker'],
    type: 'woordenschat'
  },
  {
    question: 'πρόβατον',
    answers: ['schaap'],
    type: 'woordenschat'
  },
  {
    question: 'πρόσωπον',
    answers: ['gelaat'],
    type: 'woordenschat'
  },
  {
    question: 'σημεῖον',
    answers: ['teken'],
    explanation: '(semiotiek = tekenleer)',
    type: 'woordenschat'
  },
  {
    question: 'συνέδριον',
    answers: ['raad', 'Sanhedrin'],
    type: 'woordenschat'
  },
  {
    question: 'σάββατον',
    answers: ['sabbat'],
    type: 'woordenschat'
  },
  {
    question: '(τὰ) Ἱεροσόλυμα',
    answers: ['Jeruzalem'],
    explanation: '(de Griekse vorm, onzijdig meervoud, tweede verbuiging)',
    type: 'woordenschat'
  },
  {
    question: '(ἡ) Ἰερουσαλήμ',
    answers: ['Jeruzalem'],
    explanation: '(de Hebreeuwse vorm, vrouwelijk enkelvoud, onverbogen)',
    type: 'woordenschat'
  }
]
const lesson7Vocabulary: LessonType = {
  id: 'lesson7-vocabulary',
  name: 'Les 7 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson7Vocabulary
