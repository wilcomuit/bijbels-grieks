const questions: Array<QuestionType> = [
  {
    question: 'κατῳκουν',
    answers: ['ik woonde', 'ik bewoonde', 'zij woonden', 'ze woonden', 'zij bewoonden', 'ze bewoonden'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρἐκαλουν',
    answers: ['ik smeekte', 'ik spoorde aan', 'ik bemoedigde', 'zij smeekten', 'ze smeekten', 'zij spoorden aan', 'ze spoorden aan', 'zij' +
    ' bemoedigden', 'ze bemoedigden'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιεπατουν',
    answers: ['ik ging', 'ik wandelde', 'ze gingen', 'zij gingen', 'ze wandelden', 'zij wandelden'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐκυνουν',
    answers: ['ik aanbad', 'ze aanbaden', 'zij aanbaden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἠδικουν',
    answers: ['ik deed kwaad', 'ik kwetste', 'ze deden kwaad', 'zij deden kwaad', 'ze kwetsten', 'zij kwetsten'],
    type: 'woordenschat'
  },
  {
    question: 'ἠκολουθουν',
    answers: ['ik volgde', 'ze volgden', 'zij volgden'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἠσθενουν',
    answers: ['ik was zwak', 'ik was ziek', 'ze waren zwak', 'zij waren zwak', 'ze waren ziek', 'zij waren ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγαμουν',
    answers: ['ik trouwde', 'ik huwde', 'ze trouwden', 'zij trouwden', 'ze huwden', 'zij huwden'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδουν',
    answers: ['ik bond', 'ze bonden', 'zij bonden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδιακονουν',
    answers: ['ik diende', 'ze dienden', 'zij dienden'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοκουν',
    answers: ['ik dacht', 'ik leek', 'ze dachten', 'zij dachten', 'ze leken', 'zij leken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἠλεουν',
    answers: ['ik ontfermde mij', 'ze ontfermden zich', 'zij ontfermden zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐχαριστουν',
    answers: ['ik dankte', 'ze dankten', 'zij dankten'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρατουν',
    answers: ['ik hield vast', 'ik had macht', 'ze hielden vast', 'zij hielden vast', 'ze hadden macht', 'zij hadden macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'ῳκοδομουν',
    answers: ['ik bouwde', 'ze bouwden', 'zij bouwden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφωνουν',
    answers: ['ik riep', 'ze riepen', 'zij riepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατῳκεις',
    answers: ['jij woonde', 'u woonde', 'jij bewoonde', 'u bewoonde'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρἐκαλεις',
    answers: ['jij smeekte', 'u smeekte', 'jij spoorde aan', 'u spoorde aan', 'jij bemoedigde', 'u bemoedigde'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιεπατεις',
    answers: ['jij ging', 'u ging', 'jij wandelde', 'u wandelde'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐκυνεις',
    answers: ['jij aanbad', 'u aanbad'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἠδικεις',
    answers: ['jij deed kwaad', 'u deed kwaad', 'jij kwetste', 'u kwetste'],
    type: 'woordenschat'
  },
  {
    question: 'ἠκολουθεις',
    answers: ['jij volgde', 'u volgde'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἠσθενεις',
    answers: ['jij was zwak', 'u was zwak', 'jij was ziek', 'u was ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγαμεις',
    answers: ['jij trouwde', 'u trouwde', 'jij huwde', 'u huwde'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδεις',
    answers: ['jij bond', 'u bond'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδιακονεις',
    answers: ['jij diende', 'u diende'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοκεις',
    answers: ['jij dacht', 'u dacht', 'jij leek', 'u leek'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἠλεεις',
    answers: ['jij ontfermde je', 'u ontfermde zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐχαριστεις',
    answers: ['jij dankte', 'u dankte'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρατεις',
    answers: ['jij hield vast', 'u hield vast', 'jij had macht', 'u had macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'ῳκοδομεις',
    answers: ['jij bouwde', 'u bouwde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφωνεις',
    answers: ['jij riep', 'u riep'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατῳκει',
    answers: ['hij woonde', 'zij woonde', 'het woonde', 'hij bewoonde', 'zij bewoonde', 'het bewoonde'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρἐκαλει',
    answers: ['hij smeekte', 'zij smeekte', 'het smeekte', 'hij spoorde aan', 'zij spoorde aan', 'het spoorde aan', 'hij bemoedigde', 'zij' +
    ' bemoedigde', 'het bemoedigde'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιεπατει',
    answers: ['hij ging', 'zij ging', 'het ging', 'hij wandelde', 'zij wandelde', 'het wandelde'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐκυνει',
    answers: ['hij aanbad', 'zij aanbad', 'het aanbad'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἠδικει',
    answers: ['hij deed kwaad', 'zij deed kwaad', 'het deed kwaad', 'hij kwetste', 'zij kwetste', 'het kwetste'],
    type: 'woordenschat'
  },
  {
    question: 'ἠκολουθει',
    answers: ['hij volgde', 'zij volgde', 'het volgde'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἠσθενει',
    answers: ['hij was zwak', 'zij was zwak', 'het was zwak', 'hij was ziek', 'zij was ziek', 'het was ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγαμει',
    answers: ['hij trouwde', 'zij trouwde', 'het trouwde', 'hij huwde', 'zij huwde', 'het huwde'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδει',
    answers: ['hij bond', 'zij bond', 'het bond'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδιακονει',
    answers: ['hij diende', 'zij diende', 'het diende'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοκει',
    answers: ['hij dacht', 'zij dacht', 'het dacht', 'hij leek', 'zij leek', 'het leek'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἠλεει',
    answers: ['hij ontfermde zich', 'zij ontfermde zich', 'het ontfermde zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐχαριστει',
    answers: ['hij dankte', 'zij dankte', 'het dankte'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρατει',
    answers: ['hij hield vast', 'zij hield vast', 'het hield vast', 'hij had macht', 'zij had macht', 'het had macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'ῳκοδομει',
    answers: ['hij bouwde', 'zij bouwde', 'het bouwde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφωνει',
    answers: ['hij riep', 'zij riep', 'het riep'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατῳκοῦμεν',
    answers: ['wij woonden', 'wij bewoonden'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρἐκαλοῦμεν',
    answers: ['wij smeekten', 'wij spoorden aan', 'wij bemoedigden'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιεπατοῦμεν',
    answers: ['wij gingen', 'wij wandelden'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐκυνοῦμεν',
    answers: ['wij aanbaden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἠδικοῦμεν',
    answers: ['wij deden kwaad', 'wij kwetsten'],
    type: 'woordenschat'
  },
  {
    question: 'ἠκολουθοῦμεν',
    answers: ['wij volgden'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἠσθενοῦμεν',
    answers: ['wij waren zwak', 'wij waren ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγαμοῦμεν',
    answers: ['wij trouwden', 'wij huwden'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοῦμεν',
    answers: ['wij bonden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδιακονοῦμεν',
    answers: ['wij dienden'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοκοῦμεν',
    answers: ['wij dachten', 'wij leken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἠλεοῦμεν',
    answers: ['wij ontfermden ons'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐχαριστοῦμεν',
    answers: ['wij dankten'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρατοῦμεν',
    answers: ['wij hielden vast', 'wij hadden macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'ῳκοδομοῦμεν',
    answers: ['wij bouwden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφωνοῦμεν',
    answers: ['wij riepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατῳκεῖτε',
    answers: ['jullie woonden', 'jullie bewoonden'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρἐκαλεῖτε',
    answers: ['jullie smeekten', 'jullie spoorden aan', 'jullie bemoedigden'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιεπατεῖτε',
    answers: ['jullie gingen', 'jullie wandelden'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐκυνεῖτε',
    answers: ['jullie aanbaden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἠδικεῖτε',
    answers: ['jullie deden kwaad', 'jullie kwetsten'],
    type: 'woordenschat'
  },
  {
    question: 'ἠκολουθεῖτε',
    answers: ['jullie volgden'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἠσθενεῖτε',
    answers: ['jullie waren zwak', 'jullie waren ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγαμεῖτε',
    answers: ['jullie trouwden', 'jullie huwden'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδεῖτε',
    answers: ['jullie bonden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδιακονεῖτε',
    answers: ['jullie dienden'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'ἐδοκεῖτε',
    answers: ['jullie dachten', 'jullie leken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἠλεεῖτε',
    answers: ['jullie ontfermden zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐχαριστεῖτε',
    answers: ['jullie dankten'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρατεῖτε',
    answers: ['jullie hielden vast', 'jullie hadden macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'ῳκοδομεῖτε',
    answers: ['jullie bouwden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφωνεῖτε',
    answers: ['jullie riepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson14OVTConjugation: LessonType = {
  id: 'lesson14-ovt-conjugation',
  name: 'Les 14 – Indicatief imperfectum actief',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson14OVTConjugation
