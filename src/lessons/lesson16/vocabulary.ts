const questions: Array<QuestionType> = [
  {
    question: 'παρά',
    answers: ['bij', 'naast'],
    explanation: '(parabel: παρά + βάλλω naast iets gooien)',
    type: 'woordenschat'
  },
  {
    question: 'παρ᾽',
    answers: ['bij', 'naast'],
    explanation: '(parabel: παρά + βάλλω naast iets gooien)',
    type: 'woordenschat'
  },
  {
    question: 'παρά + acc.',
    answers: ['langs', 'naast'],
    explanation: '(paradentose)',
    type: 'woordenschat'
  },
  {
    question: 'παρ᾽ + acc.',
    answers: ['langs', 'naast'],
    explanation: '(paradentose)',
    type: 'woordenschat'
  },
  {
    question: 'παρά + gen.',
    answers: ['van de kant van', 'van'],
    explanation: `('van' wordt voor personen gebruikt)`,
    type: 'woordenschat'
  },
  {
    question: 'παρ᾽ + gen.',
    answers: ['van de kant van', 'van'],
    explanation: `('van' wordt voor personen gebruikt)`,
    type: 'woordenschat'
  },
  {
    question: 'παρά + dat.',
    answers: ['blijven bij', 'bij', 'met'],
    type: 'woordenschat'
  },
  {
    question: 'παρ᾽ + dat.',
    answers: ['blijven bij', 'blijven', 'met'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπί',
    answers: ['op'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπ᾽',
    answers: ['op'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφ᾽',
    answers: ['op'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπί + acc.',
    answers: ['op', 'tegen', 'voor', 'wat betreft'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπ᾽ + acc.',
    answers: ['op', 'tegen', 'voor', 'wat betreft'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφ᾽ + acc.',
    answers: ['op', 'tegen', 'voor', 'wat betreft'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπί + gen.',
    answers: ['op', 'bij', 'voor', 'in de tijd van'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπ᾽ + gen.',
    answers: ['op', 'bij', 'voor', 'in de tijd van'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφ᾽ + gen.',
    answers: ['op', 'bij', 'voor', 'in de tijd van'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπί + dat.',
    answers: ['op', 'met', 'nabij'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπ᾽ + dat.',
    answers: ['op', 'met', 'nabij'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφ᾽ + dat.',
    answers: ['op', 'met', 'nabij'],
    type: 'woordenschat'
  },
  {
    question: 'διά + acc.',
    answers: ['om wille van'],
    type: 'woordenschat'
  },
  {
    question: 'δι᾽ + acc.',
    answers: ['om wille van'],
    type: 'woordenschat'
  },
  {
    question: 'διά + gen.',
    answers: ['door heen'],
    explanation: '(diachronisch)',
    type: 'woordenschat'
  },
  {
    question: 'δι᾽ + gen.',
    answers: ['door heen'],
    explanation: '(diachronisch)',
    type: 'woordenschat'
  },
  {
    question: 'μετά + acc.',
    answers: ['na'],
    explanation: '(gewoonlijk tijdelijk) (metamorfose, metafysica)',
    type: 'woordenschat'
  },
  {
    question: 'μετ᾽ + acc.',
    answers: ['na'],
    explanation: '(gewoonlijk tijdelijk) (metamorfose, metafysica)',
    type: 'woordenschat'
  },
  {
    question: 'μεθ᾽ + acc.',
    answers: ['na'],
    explanation: '(gewoonlijk tijdelijk) (metamorfose, metafysica)',
    type: 'woordenschat'
  },
  {
    question: 'μετά + gen.',
    answers: ['met'],
    type: 'woordenschat'
  },
  {
    question: 'μετ᾽ + gen.',
    answers: ['met'],
    type: 'woordenschat'
  },
  {
    question: 'μεθ᾽ + gen.',
    answers: ['met'],
    type: 'woordenschat'
  },
  {
    question: 'ὑπέρ + acc.',
    answers: ['over heen'],
    explanation: '(hyperbool)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπέρ + gen.',
    answers: ['voor', 'ten behoeve van'],
    type: 'woordenschat'
  },
  {
    question: 'ὑπό + acc.',
    answers: ['onder'],
    explanation: '(hypofyse, hypotaxis, hypotheek)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπ᾽ + acc.',
    answers: ['onder'],
    explanation: '(hypofyse, hypotaxis, hypotheek)',
    type: 'woordenschat'
  },
  {
    question: 'ὑφ᾽ + acc.',
    answers: ['onder'],
    explanation: '(hypofyse, hypotaxis, hypotheek)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπό + gen.',
    answers: ['door'],
    explanation: '(wordt gebruikt voor de agens, niet voor een instrumentum, zie dativus instrumentalis in Les 10)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπ᾽ + gen.',
    answers: ['door'],
    explanation: '(wordt gebruikt voor de agens, niet voor een instrumentum, zie dativus instrumentalis in Les 10)',
    type: 'woordenschat'
  },
  {
    question: 'ὑφ᾽ + gen.',
    answers: ['door'],
    explanation: '(wordt gebruikt voor de agens, niet voor een instrumentum, zie dativus instrumentalis in Les 10)',
    type: 'woordenschat'
  },
  {
    question: 'κατά + acc.',
    answers: ['volgens'],
    type: 'woordenschat'
  },
  {
    question: 'κατ᾽ + acc.',
    answers: ['volgens'],
    type: 'woordenschat'
  },
  {
    question: 'καθ᾽ + acc.',
    answers: ['volgens'],
    type: 'woordenschat'
  },
  {
    question: 'κατά + gen.',
    answers: ['tegen'],
    type: 'woordenschat'
  },
  {
    question: 'κατ᾽ + gen.',
    answers: ['tegen'],
    type: 'woordenschat'
  },
  {
    question: 'καθ᾽ + gen.',
    answers: ['tegen'],
    type: 'woordenschat'
  },
  {
    question: 'κατ᾽ ἰδίαν',
    answers: ['privé', 'prive'],
    type: 'woordenschat'
  },
  {
    question: 'καθ᾽ ἠμέραν',
    answers: ['dagelijks'],
    type: 'woordenschat'
  },
  {
    question: 'περί + acc.',
    answers: ['rond', 'ongeveer'],
    explanation: '(periferie, perikoop)',
    type: 'woordenschat'
  },
  {
    question: 'περί + gen.',
    answers: ['wat betreft'],
    type: 'woordenschat'
  },
  {
    question: 'πρό',
    answers: ['voor'],
    explanation: '(plaats of tijd)',
    type: 'woordenschat'
  },
  {
    question: 'ἐνώπιον',
    answers: ['voor'],
    explanation: '(gewoonlijk plaats) (is geklassificeerd als bijwoord, maar wordt vaak als voorzetsel gebruikt)',
    type: 'woordenschat'
  },{
    question: 'ἔμπροσθεν',
    answers: ['voor'],
    explanation: '(gewoonlijk plaats) (is geklassificeerd als bijwoord, maar wordt vaak als voorzetsel gebruikt)',
    type: 'woordenschat'
  },{
    question: 'ὀπίσω',
    answers: ['achter'],
    explanation: '(gewoonlijk plaats) (is geklassificeerd als bijwoord, maar wordt vaak als voorzetsel gebruikt)',
    type: 'woordenschat'
  },{
    question: 'ἔξω',
    answers: ['buiten', 'naar buiten'],
    explanation: '(afgeleid van ἐκ) (is geklassificeerd als bijwoord, maar wordt vaak als voorzetsel gebruikt)',
    type: 'woordenschat'
  },{
    question: 'χωρίς',
    answers: ['zonder'],
    explanation: '(is geklassificeerd als bijwoord, maar wordt vaak als voorzetsel gebruikt)',
    type: 'woordenschat'
  },{
    question: 'ἄχρι',
    answers: ['tot aan'],
    explanation: '(is soms een voorzetsel, soms een voegwoord)',
    type: 'woordenschat'
  },{
    question: 'ἕως',
    answers: ['tot aan', 'terwijl', 'totdat'],
    explanation: '(is soms een voorzetsel, soms een voegwoord)',
    type: 'woordenschat'
  },{
    question: 'ἀπό',
    answers: ['weg van'],
    type: 'woordenschat'
  },{
    question: 'ἀπ᾽',
    answers: ['weg van'],
    type: 'woordenschat'
  },{
    question: 'ἀφ᾽',
    answers: ['weg van'],
    type: 'woordenschat'
  },{
    question: 'ἐκ',
    answers: ['uit'],
    explanation: '(exodus: ἐκ [uit] + ὁδός [weg])',
    type: 'woordenschat'
  },{
    question: 'ἐξ',
    answers: ['uit'],
    explanation: '(exodus: ἐκ [uit] + ὁδός [weg])',
    type: 'woordenschat'
  },{
    question: 'ἐν',
    answers: ['in'],
    explanation: '(energie: ἐν [in] + ἔργον [werk])',
    type: 'woordenschat'
  },{
    question: 'σύν',
    answers: ['samen met'],
    explanation: '(in gebruik bijna gelijk aan μετά + gen.) (synode, syntaxis)',
    type: 'woordenschat'
  },{
    question: 'εἰς',
    answers: ['naar', 'tot in', 'tot op'],
    type: 'woordenschat'
  },{
    question: 'πρός',
    answers: ['naar', 'tot bij'],
    explanation: '(proskynese)',
    type: 'woordenschat'
  },
]
const lesson16Vocabulary: LessonType = {
  id: 'lesson16-vocabulary',
  name: 'Les 16 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson16Vocabulary
