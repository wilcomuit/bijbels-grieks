const questions: Array<QuestionType> = [
  {
    question: 'ἐστί(ν)',
    answers: ['is', 'hij is', 'ze is', 'het is'],
    type: 'woordenschat'
  },
  {
    question: 'Ἰησοῦς',
    answers: ['Jezus'],
    type: 'woordenschat'
  },
  {
    question: 'Ἰακωβος',
    answers: ['Jakobus'],
    type: 'woordenschat'
  },
  {
    question: 'ἁμαρτωλός',
    answers: ['zondaar', 'zondares'],
    explanation: '(hamartologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἄνεμος',
    answers: ['wind'],
    explanation: '(anemoon = bloem van de wind)',
    type: 'woordenschat'
  },
  {
    question: 'ἄρτος',
    answers: ['brood'],
    type: 'woordenschat'
  },
  {
    question: 'διάβολος',
    answers: ['duivel'],
    explanation: '(diabolisch)',
    type: 'woordenschat'
  },
  {
    question: 'δοῦλος',
    answers: ['slaaf'],
    type: 'woordenschat'
  },
  {
    question: 'ἣλιος',
    answers: ['zon'],
    explanation:
      '(helium: een element eerst bekend door de studie van het spectrum van de zon; Heliopolis: stad van de zon)',
    type: 'woordenschat'
  },
  {
    question: 'Θεός',
    answers: ['God'],
    explanation: '(theologie)',
    type: 'woordenschat'
  },
  {
    question: 'καρπός',
    answers: ['vrucht'],
    type: 'woordenschat'
  },
  {
    question: 'μισθός',
    answers: ['loon'],
    type: 'woordenschat'
  },
  {
    question: 'ναός',
    answers: ['tempel'],
    type: 'woordenschat'
  },
  {
    question: 'οἶκος',
    answers: ['huis'],
    explanation: '(ecologie, economie = staathuishoudkunde, vgl. wijk)',
    type: 'woordenschat'
  },
  {
    question: 'οἶνος',
    answers: ['wijn'],
    type: 'woordenschat'
  },
  {
    question: 'οὐρανός',
    answers: ['hemel'],
    explanation: '(vaak in het meervoud)',
    type: 'woordenschat'
  },
  {
    question: 'ὄχλος',
    answers: ['menigte'],
    explanation: '(ochlocratie: regering van het gepeupel)',
    type: 'woordenschat'
  },
  {
    question: 'πειρασμός',
    answers: ['bekoring', 'verzoeking'],
    type: 'woordenschat'
  },
  {
    question: 'σταυρός',
    answers: ['kruis'],
    explanation: '(staurologie)',
    type: 'woordenschat'
  },
  {
    question: 'υἱός',
    answers: ['zoon'],
    type: 'woordenschat'
  },
  {
    question: 'καιρός',
    answers: ['geschikt ongeblik', 'moment', 'tijd', 'kans'],
    type: 'woordenschat'
  },
  {
    question: 'χρόνος',
    answers: ['tijd', 'duur'],
    explanation: '(chronologisch, chronometer, kroniek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔρημος',
    answers: ['woestijn'],
    explanation: '(eremiet = kluizenaar die in de woestijn woont)',
    type: 'woordenschat'
  },
  {
    question: 'ὁδός',
    answers: ['weg'],
    explanation: '(exodus: ἐξ = uit; synode: συν = samen)',
    type: 'woordenschat'
  },
  {
    question: 'παρθένος',
    answers: ['maagd'],
    explanation: '(parthenogenese = maagdelijke geboorte)',
    type: 'woordenschat'
  }
]
const lesson6Vocabulary: LessonType = {
  id: 'lesson6-vocabulary',
  name: 'Les 6 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson6Vocabulary
