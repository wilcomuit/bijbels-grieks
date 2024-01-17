const questions: Array<QuestionType> = [
  {
    question: 'ἄγεις',
    answers: ['jij leidt', 'u leidt', 'jij brengt', 'u brengt', 'jij gaat', 'u gaat'],
    explanation: '(Onovergankelijk: jij gaat)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγεις',
    answers: ['jij leidt weg', 'u leidt weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγεις',
    answers: ['jij brengt samen', 'u brengt samen', 'jij verzamelt', 'u verzamelt'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγεις',
    answers: ['jij vertrekt', 'u vertrekt'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρεις',
    answers: ['jij draagt', 'u draagt'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρεις',
    answers: ['jij brengt', 'u brengt', 'jij offert', 'u offert'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούεις',
    answers: ['jij hoort', 'u hoort'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούεις',
    answers: ['jij gehoorzaamt', 'u gehoorzaamt', 'jij luistert naar', 'u luistert naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκεις',
    answers: ['jij leest', 'u leest'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκεις',
    answers: ['jij herkent', 'u herkent'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκεις',
    answers: ['jij sterft', 'u sterft'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύεις',
    answers: ['jij bevrijdt', 'u bevrijdt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλεις',
    answers: ['jij werpt uit', 'u werpt uit', 'jij gooit uit', 'u gooit uit', 'jij zendt uit', 'u zendt uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύεις',
    answers: ['jij kleedt aan', 'u kleedt aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνεις',
    answers: ['jij ontvangt', 'u ontvangt'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγεις',
    answers: ['jij opent', 'u opent'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκεις',
    answers: ['jij leert', 'u leert', 'jij onderwijst', 'u onderwijst'],
    type: 'woordenschat'
  },
  {
    question: 'διώκεις',
    answers: ['jij vervolgt', 'u vervolgt'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίεις',
    answers: ['jij weent', 'u weent'],
    type: 'woordenschat'
  },
  {
    question: 'πείθεις',
    answers: ['jij overtuigt', 'u overtuigt'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύεις',
    answers: ['jij loopt over', 'u loopt over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύεις',
    answers: ['jij gelooft', 'u gelooft'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύεις',
    answers: ['jij voorspelt', 'u voorspelt', 'jij profeteert', 'u profeteert'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρεις',
    answers: ['jij verheugt je', 'u verheugt zich'],
    type: 'woordenschat'
  }
]
const lesson13JijConjugation: LessonType = {
  id: 'lesson13-jij-conjugation',
  name: 'Les 13 – Jij/u vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13JijConjugation
