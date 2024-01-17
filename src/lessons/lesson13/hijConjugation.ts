const questions: Array<QuestionType> = [
  {
    question: 'ἄγει',
    answers: ['hij leidt', 'zij leidt', 'het leidt', 'hij brengt', 'zij brengt', 'het brengt', 'hij gaat', 'zij gaat', 'het gaat'],
    explanation: '(Onovergankelijk: hij gaat)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγει',
    answers: ['hij leidt weg', 'zij leidt weg', 'het leidt weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγει',
    answers: ['hij brengt samen', 'zij brengt samen', 'het brengt samen', 'hij brengt weg', 'zij brengt weg', 'het brengt weg', 'hij' +
    ' verzamelt', 'zij verzamelt', 'het verzamelt'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγει',
    answers: ['hij vertrekt', 'zij vertrekt', 'het vertrekt'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρει',
    answers: ['hij draagt', 'zij draagt', 'het draagt'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρει',
    answers: ['hij brengt', 'zij brengt', 'het brengt', 'hij offert', 'zij offert', 'het offert'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούει',
    answers: ['hij hoort', 'zij hoort', 'het hoort'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούει',
    answers: ['hij gehoorzaamt', 'zij gehoorzaamt', 'het gehoorzaamt', 'hij luistert naar', 'zij luistert naar', 'het luistert naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκει',
    answers: ['hij leest', 'zij leest', 'het leest'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκει',
    answers: ['hij herkent', 'zij herkent', 'het herkent'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκει',
    answers: ['hij sterft', 'zij sterft', 'het sterft'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύει',
    answers: ['hij bevrijdt', 'zij bevrijdt', 'het bevrijdt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλει',
    answers: ['hij werpt uit', 'zij werpt uit', 'het werpt uit', 'hij gooit uit', 'zij gooit uit', 'het gooit uit', 'hij zendt uit', 'zij zendt uit', ' het zendt uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύει',
    answers: ['hij kleedt aan', 'zij kleedt aan', 'het kleedt aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνει',
    answers: ['hij ontvangt', 'zij ontvangt', 'het ontvangt'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγει',
    answers: ['hij opent', 'zij opent', 'het opent'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκει',
    answers: ['hij leert', 'zij leert', 'het leert', 'hij onderwijst', 'zij onderwijst', 'het onderwijst'],
    type: 'woordenschat'
  },
  {
    question: 'διώκει',
    answers: ['hij vervolgt', 'zij vervolgt', 'het vervolgt'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίει',
    answers: ['hij weent', 'zij weent', 'het weent'],
    type: 'woordenschat'
  },
  {
    question: 'πείθει',
    answers: ['hij overtuigt', 'zij overtuigt', 'het overtuigt'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύει',
    answers: ['hij loopt over', 'zij loopt over', 'het loopt over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύει',
    answers: ['hij gelooft', 'zij gelooft', 'het gelooft'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύει',
    answers: ['hij voorspelt', 'zij voorspelt', 'het voorspelt', 'hij profeteert', 'zij profeteert', 'het profeteert'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρει',
    answers: ['hij verheugt zich', 'zij verheugt zich', 'het verheugt zich'],
    type: 'woordenschat'
  }
]
const lesson13HijConjugation: LessonType = {
  id: 'lesson13-hij-conjugation',
  name: 'Les 13 – Hij/zij/het vervoegingen',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13HijConjugation
