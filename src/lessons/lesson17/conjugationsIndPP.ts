const questions: Array<QuestionType> = [
  {
    question: 'βάλλω',
    answers: ['ik word geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπω',
    answers: ['ik word gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκω',
    answers: ['ik word gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφω',
    answers: ['ik word geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρω',
    answers: ['ik word opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίω',
    answers: ['ik word gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκω',
    answers: ['ik word gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύω',
    answers: ['ik word genezen', 'ik word geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνω',
    answers: ['ik word geoordeeld', 'ik word gescheiden', 'ik word onderscheiden'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνω',
    answers: ['ik word genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύω',
    answers: ['ik word losgemaakt'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένω',
    answers: ['ik word begeleid'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπω',
    answers: ['ik word gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζω',
    answers: ['ik word gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλεις',
    answers: ['jij wordt geworpen', 'u wordt geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπεις',
    answers: ['jij wordt gezien', 'u wordt gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκεις',
    answers: ['jij wordt gekend', 'u wordt gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφεις',
    answers: ['jij wordt geschreven', 'u wordt geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρεις',
    answers: ['jij wordt opgewekt', 'u wordt opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίεις',
    answers: ['jij wordt gegeten', 'u wordt gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκεις',
    answers: ['jij wordt gevonden', 'u wordt gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύεις',
    answers: ['jij wordt genezen', 'u wordt genezen', 'jij wordt geheeld', 'u wordt geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνεις',
    answers: [
      'jij wordt geoordeeld',
      'u wordt geoordeeld',
      'jij wordt gescheiden',
      'u wordt gescheiden',
      'jij wordt onderscheiden',
      'u wordt onderscheiden'
    ],
    explanation: 'jij/u oordeelt, jij/u scheid, jij/u onderscheidt (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνεις',
    answers: ['jij wordt genomen', 'u wordt genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύεις',
    answers: ['jij wordt losgemaakt', 'u wordt losgemaakt'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένεις',
    answers: [
      'jij wordt begeleid',
      'u wordt begeleid'
    ],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπεις',
    answers: ['jij wordt gezonden', 'u wordt gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζεις',
    answers: ['jij wordt gered', 'u wordt gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλει',
    answers: ['hij wordt geworpen', 'zij wordt geworpen', 'het wordt geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπει',
    answers: ['hij wordt gezien', 'zij wordt gezien', 'het wordt gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκει',
    answers: ['hij wordt gekend', 'zij wordt gekend', 'het wordt gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφει',
    answers: ['hij wordt geschreven', 'zij wordt geschreven', 'het wordt geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρει',
    answers: ['hij wordt opgewekt', 'zij wordt opgewekt', 'het wordt opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίει',
    answers: ['hij wordt gegeten', 'zij wordt gegeten', 'het wordt gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκει',
    answers: ['hij wordt gevonden', 'zij wordt gevonden', 'het wordt gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύει',
    answers: ['hij wordt genezen', 'zij wordt genezen', 'het wordt genezen', 'hij wordt geheeld', 'zij wordt geheeld', 'het wordt geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνει',
    answers: [
      'hij wordt geoordeeld',
      'zij wordt geoordeeld',
      'het wordt geoordeeld',
      'hij wordt gescheiden',
      'zij wordt gescheiden',
      'het wordt gescheiden',
      'hij wordt onderscheiden',
      'zij wordt onderscheiden',
      'het wordt onderscheiden'
    ],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνει',
    answers: ['hij wordt genomen', 'zij wordt genomen', 'het wordt genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύει',
    answers: ['hij wordt losgemaakt', 'zij wordt losgemaakt', 'het wordt losgemaakt'],
    explanation:
      '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένει',
    answers: [
      'hij wordt begeleid',
      'zij wordt begeleid',
      'het wordt begeleid'
    ],
    explanation:
      '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπει',
    answers: ['hij wordt gezonden', 'zij wordt gezonden', 'het wordt gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζει',
    answers: ['hij wordt gered', 'zij wordt gered', 'het wordt gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλομεν',
    answers: ['wij worden geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπομεν',
    answers: ['wij worden gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκομεν',
    answers: ['wij worden gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφομεν',
    answers: ['wij worden geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρομεν',
    answers: ['wij worden opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίομεν',
    answers: ['wij worden gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκομεν',
    answers: ['wij worden gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύομεν',
    answers: ['wij worden genezen', 'wij worden geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνομεν',
    answers: ['wij worden geoordeeld', 'wij worden gescheiden', 'wij worden onderscheiden'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνομεν',
    answers: ['wij worden genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύομεν',
    answers: ['wij worden losgemaakt'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένομεν',
    answers: ['wij worden begeleid'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπομεν',
    answers: ['wij worden gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζομεν',
    answers: ['wij worden gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλετε',
    answers: ['jullie worden geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπετε',
    answers: ['jullie worden gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκετε',
    answers: ['jullie worden gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφετε',
    answers: ['jullie worden geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρετε',
    answers: ['jullie worden opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίετε',
    answers: ['jullie worden gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκετε',
    answers: ['jullie worden gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύετε',
    answers: ['jullie worden genezen', 'jullie worden geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνετε',
    answers: ['jullie worden geoordeeld', 'jullie worden gescheiden', 'jullie worden onderscheiden'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνετε',
    answers: ['jullie worden genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύετε',
    answers: ['jullie worden losgemaakt'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένετε',
    answers: ['jullie worden begeleid'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπετε',
    answers: ['jullie worden gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζετε',
    answers: ['jullie worden gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλουσιν',
    answers: ['ze worden geworpen', 'zij worden geworpen'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπουσιν',
    answers: ['ze worden gezien', 'zij worden gezien'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκουσιν',
    answers: ['ze worden gekend', 'zij worden gekend'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφουσιν',
    answers: ['ze worden geschreven', 'zij worden geschreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρουσιν',
    answers: ['ze worden opgewekt', 'zij worden opgewekt'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίουσιν',
    answers: ['ze worden gegeten', 'zij worden gegeten'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκουσιν',
    answers: ['ze worden gevonden', 'zij worden gevonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύουσιν',
    answers: ['ze worden genezen', 'zij worden genezen', 'ze worden geheeld', 'zij worden geheeld'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνουσιν',
    answers: [
      'ze worden geoordeeld',
      'zij worden geoordeeld',
      'ze worden gescheiden',
      'zij worden gescheiden',
      'ze worden onderscheiden',
      'zij worden onderscheiden'
    ],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνουσιν',
    answers: ['ze worden genomen', 'zij worden genomen'],
    type: 'woordenschat'
  },
  {
    question: 'λύουσιν',
    answers: ['ze worden losgemaakt', 'zij worden losgemaakt'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένουσιν',
    answers: [
      'ze worden begeleid',
      'zij worden begeleid'
    ],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπουσιν',
    answers: ['ze worden gezonden', 'zij worden gezonden'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζουσιν',
    answers: ['ze worden gered', 'zij worden gered'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },

  // =================================================================================================================================
  // =================================================================================================================================
  // =================================================================================================================================

  {
    question: 'αἰτῶ',
    answers: ['ik word gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημῶ',
    answers: ['ik word gelasterd'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογῶ',
    answers: ['ik word gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητῶ',
    answers: ['ik word gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρῶ',
    answers: ['ik word gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλῶ',
    answers: ['ik word geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισῶ',
    answers: ['ik word gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηρῶ',
    answers: ['ik word onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖς',
    answers: ['jij wordt gevraagd', 'u wordt gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖς',
    answers: ['jij wordt gelasterd', 'u wordt gelasterd'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖς',
    answers: ['jij wordt gezegend', 'u wordt gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖς',
    answers: ['jij wordt gezocht', 'u wordt gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖς',
    answers: ['jij wordt gezien', 'u wordt gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖς',
    answers: ['jij wordt geroepen', 'u wordt geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖς',
    answers: ['jij wordt gehaat', 'u wordt gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖς',
    answers: ['jij wordt onderhouden', 'u wordt onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖ',
    answers: ['hij wordt gevraagd', 'zij wordt gevraagd', 'het wordt gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖ',
    answers: [
      'hij wordt gelasterd',
      'zij wordt gelasterd',
      'het wordt gelasterd'
    ],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖ',
    answers: ['hij wordt gezegend', 'zij wordt gezegend', 'het wordt gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖ',
    answers: ['hij wordt gezocht', 'zij wordt gezocht', 'het wordt gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖ',
    answers: ['hij wordt gezien', 'zij wordt gezien', 'het wordt gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖ',
    answers: ['hij wordt geroepen', 'zij wordt geroepen', 'het wordt geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖ',
    answers: ['hij wordt gehaat', 'zij wordt gehaat', 'het wordt gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖ',
    answers: ['hij wordt onderhouden', 'zij wordt onderhouden', 'het wordt onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'αἰτοῦμεν',
    answers: ['wij worden gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦμεν',
    answers: ['wij worden gelasterd'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦμεν',
    answers: ['wij worden gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦμεν',
    answers: ['wij worden gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦμεν',
    answers: ['wij worden gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦμεν',
    answers: ['wij worden geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦμεν',
    answers: ['wij worden gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦμεν',
    answers: ['wij worden onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖτε',
    answers: ['jullie worden gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖτε',
    answers: ['jullie worden gelasterd'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖτε',
    answers: ['jullie worden gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖτε',
    answers: ['jullie worden gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖτε',
    answers: ['jullie worden gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖτε',
    answers: ['jullie worden geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖτε',
    answers: ['jullie worden gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖτε',
    answers: ['jullie worden onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'αἰτοῦσιν',
    answers: ['ze worden gevraagd', 'zij worden gevraagd'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦσιν',
    answers: ['ze worden gelasterd', 'zij worden gelasterd'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦσιν',
    answers: ['ze worden gezegend', 'zij worden gezegend'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦσιν',
    answers: ['ze worden gezocht', 'zij worden gezocht'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦσιν',
    answers: ['ze worden gezien', 'zij worden gezien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦσιν',
    answers: ['ze worden geroepen', 'zij worden geroepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦσιν',
    answers: ['ze worden gehaat', 'zij worden gehaat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦσιν',
    answers: ['ze worden onderhouden', 'zij worden onderhouden'],
    type: 'woordenschat'
  },

  // =================================================================================================================================
  // =================================================================================================================================
  // =================================================================================================================================

  {
    question: 'ἄγω',
    answers: ['ik word geleid', 'ik word gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγω',
    answers: ['ik word weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγω',
    answers: ['ik word samengebracht', 'ik word verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρω',
    answers: ['ik word gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρω',
    answers: ['ik word gebracht', 'ik word geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούω',
    answers: ['ik word gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούω',
    answers: ['ik word gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκω',
    answers: ['ik word herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύω',
    answers: ['ik word bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλω',
    answers: ['ik word uitgeworpen', 'ik word uitgegooid', 'ik word uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύω',
    answers: ['ik word aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνω',
    answers: ['ik word ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκω',
    answers: ['ik word geleerd', 'ik word onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκω',
    answers: ['ik word vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθω',
    answers: ['ik word overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύω',
    answers: ['ik word geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρω',
    answers: ['ik word verheugd'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγεις',
    answers: ['jij wordt geleid', 'u wordt geleid', 'jij wordt gebracht', 'u wordt gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγεις',
    answers: ['jij wordt weggeleid', 'u wordt weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγεις',
    answers: ['jij wordt samengebracht', 'u wordt samengebracht', 'jij wordt verzameld', 'u wordt verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρεις',
    answers: ['jij wordt gedragen', 'u wordt gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρεις',
    answers: ['jij wordt gebracht', 'u wordt gebracht', 'jij wordt geofferd', 'u wordt geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούεις',
    answers: ['jij wordt gehoord', 'u wordt gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούεις',
    answers: ['jij wordt gehoorzaamd', 'u wordt gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκεις',
    answers: ['jij wordt herkend', 'u wordt herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύεις',
    answers: ['jij wordt bevrijd', 'u wordt bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλεις',
    answers: ['jij wordt uitgeworpen', 'u wordt uitgeworpen', 'jij wordt uitgegooid', 'u wordt uitgegooid', 'jij wordt uitgezonden', 'u wordt uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύεις',
    answers: ['jij wordt aangekleed', 'u wordt aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνεις',
    answers: ['jij wordt ontvangen', 'u wordt ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκεις',
    answers: ['jij wordt geleerd', 'u wordt geleerd', 'jij wordt onderwezen', 'u wordt onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκεις',
    answers: ['jij wordt vervolgd', 'u wordt vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθεις',
    answers: ['jij wordt overtuigd', 'u wordt overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύεις',
    answers: ['jij wordt geloofd', 'u wordt geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρεις',
    answers: ['jij wordt verheugd', 'u wordt verheugd'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγει',
    answers: ['hij wordt geleid', 'zij wordt geleid', 'het wordt geleid', 'hij wordt gebracht', 'zij wordt gebracht', 'het wordt' +
    ' gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγει',
    answers: ['hij wordt weggeleid', 'zij wordt weggeleid', 'het wordt weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγει',
    answers: ['hij wordt samengebracht', 'zij wordt samengebracht', 'het wordt samengebracht', 'hij wordt weggebracht', 'zij wordt' +
    ' weggebracht', 'het wordt weggebracht', 'hij wordt verzameld', 'zij wordt verzameld', 'het wordt verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρει',
    answers: ['hij wordt gedragen', 'zij wordt gedragen', 'het wordt gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρει',
    answers: ['hij wordt gebracht', 'zij wordt gebracht', 'het wordt gebracht', 'hij wordt geofferd', 'zij wordt geofferd', 'het wordt' +
    ' geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούει',
    answers: ['hij wordt gehoord', 'zij wordt gehoord', 'het wordt gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούει',
    answers: ['hij wordt gehoorzaamd', 'zij wordt gehoorzaamd', 'het wordt gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκει',
    answers: ['hij wordt herkend', 'zij wordt herkend', 'het wordt herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύει',
    answers: ['hij wordt bevrijd', 'zij wordt bevrijd', 'het wordt bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλει',
    answers: ['hij wordt uitgeworpen', 'zij wordt uitgeworpen', 'het wordt uitgeworpen', 'hij wordt uitgegooid',
      'zij wordt uitgegooid', 'het wordt uitgegooid', 'hij wordt uitgezonden', 'zij wordt uitgezonden', ' het wordt uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύει',
    answers: ['hij wordt aangekleed', 'zij wordt aangekleed', 'het wordt aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνει',
    answers: ['hij wordt ontvangen', 'zij wordt ontvangen', 'het wordt ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκει',
    answers: ['hij wordt geleerd', 'zij wordt geleerd', 'het wordt geleerd',
      'hij wordt onderwezen', 'zij wordt onderwezen', 'het wordt onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκει',
    answers: ['hij wordt vervolgd', 'zij wordt vervolgd', 'het wordt vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθει',
    answers: ['hij wordt overtuigd', 'zij wordt overtuigd', 'het wordt overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύει',
    answers: ['hij wordt geloofd', 'zij wordt geloofd', 'het wordt geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρει',
    answers: ['hij wordt verheugd', 'zij wordt verheugd', 'het wordt verheugd'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγομεν',
    answers: ['wij worden geleid', 'wij worden gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγομεν',
    answers: ['wij worden weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγομεν',
    answers: ['wij worden samengebracht', 'wij worden verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρομεν',
    answers: ['wij worden gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρομεν',
    answers: ['wij worden gebracht', 'wij worden geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούομεν',
    answers: ['wij worden gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούομεν',
    answers: ['wij worden gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκομεν',
    answers: ['wij worden herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύομεν',
    answers: ['wij worden bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλομεν',
    answers: ['wij worden uitgeworpen', 'wij worden uitgegooid', 'wij worden uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύομεν',
    answers: ['wij worden aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνομεν',
    answers: ['wij worden ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκομεν',
    answers: ['wij worden geleerd', 'wij worden onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκομεν',
    answers: ['wij worden vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθομεν',
    answers: ['wij worden overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύομεν',
    answers: ['wij worden geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρομεν',
    answers: ['wij worden verheugd'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγετε',
    answers: ['jullie worden geleid', 'jullie worden gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγετε',
    answers: ['jullie worden weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγετε',
    answers: ['jullie worden samengebracht', 'jullie worden verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρετε',
    answers: ['jullie worden gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρετε',
    answers: ['jullie worden gebracht', 'jullie worden geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούετε',
    answers: ['jullie worden gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούετε',
    answers: ['jullie worden gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκετε',
    answers: ['jullie worden herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύετε',
    answers: ['jullie worden bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλετε',
    answers: ['jullie worden uitgeworpen', 'jullie worden uitgegooid', 'jullie worden uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύετε',
    answers: ['jullie worden aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνετε',
    answers: ['jullie worden ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκετε',
    answers: ['jullie worden geleerd', 'jullie worden onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκετε',
    answers: ['jullie worden vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθετε',
    answers: ['jullie worden overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύετε',
    answers: ['jullie worden geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρετε',
    answers: ['jullie worden verheugd', 'jullie worden verheugd'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγουσιν',
    answers: ['ze worden geleid', 'zij worden geleid', 'ze worden gebracht', 'zij worden gebracht'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγουσιν',
    answers: ['ze worden weggeleid', 'zij worden weggeleid'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγουσιν',
    answers: ['ze worden samengebracht', 'zij worden samengebracht', 'ze worden verzameld', 'zij worden verzameld'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'φέρουσιν',
    answers: ['ze worden gedragen', 'zij worden gedragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρουσιν',
    answers: ['ze worden gebracht', 'zij worden gebracht', 'ze worden geofferd', 'zij worden geofferd'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούουσιν',
    answers: ['ze worden gehoord', 'zij worden gehoord'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούουσιν',
    answers: ['ze worden gehoorzaamd', 'zij worden gehoorzaamd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκουσιν',
    answers: ['ze worden herkend', 'zij worden herkend'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύουσιν',
    answers: ['ze worden bevrijd', 'zij worden bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλουσιν',
    answers: ['ze worden uitgeworpen', 'zij worden uitgeworpen', 'ze worden uitgegooid', 'zij worden uitgegooid', 'ze worden uitgezonden', 'zij worden' +
    ' uitgezonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύουσιν',
    answers: ['ze worden aangekleed', 'zij worden aangekleed'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνουσιν',
    answers: ['ze worden ontvangen', 'zij worden ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκουσιν',
    answers: ['ze worden geleerd', 'zij worden geleerd', 'ze worden onderwezen', 'zij worden onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκουσιν',
    answers: ['ze worden vervolgd', 'zij worden vervolgd'],
    type: 'woordenschat'
  },
  {
    question: 'πείθουσιν',
    answers: ['ze worden overtuigd', 'zij worden overtuigd'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύουσιν',
    answers: ['ze worden geloofd', 'zij worden geloofd'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'χαίρουσιν',
    answers: ['ze worden verheugd', 'zij worden verheugd'],
    type: 'woordenschat'
  },

  // =================================================================================================================================
  // =================================================================================================================================
  // =================================================================================================================================

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
  },
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
  },
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
  },
  {
    question: 'κατοικοῦμεν',
    answers: ['wij wonen', 'wij bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλοῦμεν',
    answers: ['wij smeken', 'wij sporen aan', 'wij bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατοῦμεν',
    answers: ['wij gaan', 'wij wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνοῦμεν',
    answers: ['wij aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικοῦμεν',
    answers: ['wij doen kwaad', 'wij kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθοῦμεν',
    answers: ['wij volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενοῦμεν',
    answers: ['wij zijn zwak', 'wij zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμοῦμεν',
    answers: ['wij trouwen', 'wij huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δοῦμεν',
    answers: ['wij binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονοῦμεν',
    answers: ['wij dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκοῦμεν',
    answers: ['wij denken', 'wij lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεοῦμεν',
    answers: ['wij ontfermen ons'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστοῦμεν',
    answers: ['wij danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατοῦμεν',
    answers: ['wij houden vast', 'wij hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομοῦμεν',
    answers: ['wij bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνοῦμεν',
    answers: ['wij roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατοικεῖτε',
    answers: ['jullie wonen', 'jullie bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλεῖτε',
    answers: ['jullie smeken', 'jullie sporen aan', 'jullie bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατεῖτε',
    answers: ['jullie gaan', 'jullie wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνεῖτε',
    answers: ['jullie aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικεῖτε',
    answers: ['jullie doen kwaad', 'jullie kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθεῖτε',
    answers: ['jullie volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενεῖτε',
    answers: ['jullie zijn zwak', 'jullie zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμεῖτε',
    answers: ['jullie trouwen', 'jullie huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δεῖτε',
    answers: ['jullie binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονεῖτε',
    answers: ['jullie dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκεῖτε',
    answers: ['jullie denken', 'jullie lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεεῖτε',
    answers: ['jullie ontfermen zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστεῖτε',
    answers: ['jullie danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατεῖτε',
    answers: ['jullie houden vast', 'jullie hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομεῖτε',
    answers: ['jullie bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνεῖτε',
    answers: ['jullie roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  },
  {
    question: 'κατοικοῦσιν',
    answers: ['zij wonen', 'ze wonen', 'zij bewonen', 'ze bewonen'],
    explanation: '(+acc. of ἐν + dat.)',
    type: 'woordenschat'
  },
  {
    question: 'παρακαλοῦσιν',
    answers: ['zij smeken', 'ze smeken', 'zij sporen aan', 'ze sporen aan', 'zij bemoedigen', 'ze bemoedigen'],
    explanation: '(Parakleet)',
    type: 'woordenschat'
  },
  {
    question: 'περιπατοῦσιν',
    answers: ['ze gaan', 'zij gaan', 'ze wandelen', 'zij wandelen'],
    explanation: '(peripateticus)',
    type: 'woordenschat'
  },
  {
    question: 'προσκυνοῦσιν',
    answers: ['ze aanbidden', 'zij aanbidden'],
    explanation: '(+ dat., soms + acc.) (proskynese)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδικοῦσιν',
    answers: ['ze doen kwaad', 'zij doen kwaad', 'ze kwetsen', 'zij kwetsen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκολουθοῦσιν',
    answers: ['ze volgen', 'zij volgen'],
    explanation: '(akoliet)',
    type: 'woordenschat'
  },
  {
    question: 'ἀσθενοῦσιν',
    answers: ['ze zijn zwak', 'zij zijn zwak', 'ze zijn ziek', 'zij zijn ziek'],
    explanation: '(legasthenie)',
    type: 'woordenschat'
  },
  {
    question: 'γαμοῦσιν',
    answers: ['ze trouwen', 'zij trouwen', 'ze huwen', 'zij huwen'],
    explanation: '(bruidegom)',
    type: 'woordenschat'
  },
  {
    question: 'δοῦσιν',
    answers: ['ze binden', 'zij binden'],
    explanation: '(a-syn-deton)',
    type: 'woordenschat'
  },
  {
    question: 'διακονοῦσιν',
    answers: ['ze dienen', 'zij dienen'],
    explanation: '(diaken)',
    type: 'woordenschat'
  },
  {
    question: 'δοκοῦσιν',
    answers: ['ze denken', 'zij denken', 'ze lijken', 'zij lijken'],
    explanation: '(docetisme)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλεοῦσιν',
    answers: ['ze ontfermen zich', 'zij ontfermen zich'],
    explanation: '(Kyrie eleison)',
    type: 'woordenschat'
  },
  {
    question: 'εὐχαριστοῦσιν',
    answers: ['ze danken', 'zij danken'],
    explanation: '(eucharistie)',
    type: 'woordenschat'
  },
  {
    question: 'κρατοῦσιν',
    answers: ['ze houden vast', 'zij houden vast', 'ze hebben macht', 'zij hebben macht'],
    explanation: '(democratie)',
    type: 'woordenschat'
  },
  {
    question: 'οἰκοδομοῦσιν',
    answers: ['ze bouwen', 'zij bouwen'],
    type: 'woordenschat'
  },
  {
    question: 'φωνοῦσιν',
    answers: ['ze roepen', 'zij roepen'],
    explanation: '(telefoon)',
    type: 'woordenschat'
  }
]
const lesson17ConjugationsIndPP: LessonType = {
  id: 'lesson17-conjugations-indpp',
  name: 'Les 17 – Indicatief presens passief',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson17ConjugationsIndPP
