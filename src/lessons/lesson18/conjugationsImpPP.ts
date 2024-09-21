const questions: Array<QuestionType> = [
  {
    question: 'βάλλω',
    answers: ['ik werp'],
    type: 'woordenschat'
  },
  {
    question: 'βλέπω',
    answers: ['ik zie'],
    type: 'woordenschat'
  },
  {
    question: 'γινώσκω',
    answers: ['ik weet', 'ik ken'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφω',
    answers: ['ik schrijf'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρω',
    answers: ['ik wek op'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίω',
    answers: ['ik eet'],
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκω',
    answers: ['ik vind'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχω',
    answers: ['ik heb'],
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύω',
    answers: ['ik genees', 'ik heel'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνω',
    answers: ['ik oordeel', 'ik scheid', 'ik onderscheid'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνω',
    answers: ['ik neem'],
    type: 'woordenschat'
  },
  {
    question: 'λέγω',
    answers: ['ik zeg'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύω',
    answers: ['ik maak los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένω',
    answers: ['ik blijf', 'ik begeleid', 'ik houd een optocht'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπω',
    answers: ['ik zend'],
    type: 'woordenschat'
  },
  {
    question: 'σῴζω',
    answers: ['ik red'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλεις',
    answers: ['jij werpt', 'u werpt'],
    explanation: 'jij/u werpt',
    type: 'woordenschat'
  },
  {
    question: 'βλέπεις',
    answers: ['jij ziet', 'u ziet'],
    explanation: 'jij/u ziet',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκεις',
    answers: ['jij weet', 'u weet', 'jij kent', 'u kent'],
    explanation: 'jij/u weet, jij/u kent (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφεις',
    answers: ['jij schrijft', 'u schrijft'],
    explanation: 'jij schrijft, u schrijft (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρεις',
    answers: ['jij wekt op', 'u wekt op'],
    explanation: 'jij/u wekt op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίεις',
    answers: ['jij eet', 'u eet'],
    explanation: 'jij/u eet',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκεις',
    answers: ['jij vindt', 'u vindt'],
    explanation: 'jij/u vindt (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχεις',
    answers: ['jij hebt', 'u hebt', 'u heeft'],
    explanation: 'jij/u hebt, u heeft',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύεις',
    answers: ['jij geneest', 'u geneest', 'jij heelt', 'u heelt'],
    explanation: 'jij/u geneest, jij/u heelt (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνεις',
    answers: [
      'jij oordeelt',
      'u oordeelt',
      'jij scheidt',
      'u scheidt',
      'jij onderscheidt',
      'u onderscheidt'
    ],
    explanation: 'jij/u oordeelt, jij/u scheid, jij/u onderscheidt (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνεις',
    answers: ['jij neemt', 'u neemt'],
    explanation: 'jij/u neemt',
    type: 'woordenschat'
  },
  {
    question: 'λέγεις',
    answers: ['jij zegt', 'u zegt'],
    explanation: 'jij/u zegt (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύεις',
    answers: ['jij maakt los', 'u maakt los'],
    explanation: 'jij/u maakt los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένεις',
    answers: [
      'jij blijft',
      'u blijft',
      'jij begeleidt',
      'u begeleidt',
      'jij houdt een optocht',
      'u houdt een optocht'
    ],
    explanation: 'jij/u blijf, jij/u begeleidt, jij/u houdt een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπεις',
    answers: ['jij zendt', 'u zendt'],
    explanation: 'jij/u zendt',
    type: 'woordenschat'
  },
  {
    question: 'σῴζεις',
    answers: ['jij redt', 'u redt'],
    explanation: 'jij/u redt (soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλει',
    answers: ['hij werpt', 'zij werpt', 'het werpt'],
    explanation: 'hij/zij/het werpt',
    type: 'woordenschat'
  },
  {
    question: 'βλέπει',
    answers: ['hij ziet', 'zij ziet', 'het ziet'],
    explanation: 'hij/zij/het ziet',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκει',
    answers: ['hij weet', 'zij weet', 'het weet', 'hij kent', 'zij kent', 'het kent'],
    explanation: 'hij/zij/het weet, hij/zij/het kent (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφει',
    answers: ['hij schrijft', 'zij schrijft', 'het schrijft'],
    explanation: 'hij/zij/het schrijft (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρει',
    answers: ['hij wekt op', 'zij wekt op', 'het wekt op'],
    explanation: 'hij/zij/het wekt op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίει',
    answers: ['hij eet', 'zij eet', 'het eet'],
    explanation: 'hij/zij/het eet',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκει',
    answers: ['hij vindt', 'zij vindt', 'het vindt'],
    explanation: 'hij/zij/het vindt (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχει',
    answers: ['hij heeft', 'zij heeft', 'het heeft'],
    explanation: 'hij/zij/het heeft',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύει',
    answers: ['hij geneest', 'zij geneest', 'het geneest', 'hij heelt', 'zij heelt', 'het heelt'],
    explanation: 'hij/zij/het geneest, hij/zij/het heelt (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνει',
    answers: [
      'hij oordeelt',
      'zij oordeelt',
      'het oordeelt',
      'hij scheidt',
      'zij scheidt',
      'het scheidt',
      'hij onderscheidt',
      'zij onderscheidt',
      'het onderscheidt'
    ],
    explanation: 'hij/zij/het oordeelt, hij/zij/het scheidt, hij/zij/het onderscheidt (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνει',
    answers: ['hij neemt', 'zij neemt', 'het neemt'],
    explanation: 'hij/zij/het neemt',
    type: 'woordenschat'
  },
  {
    question: 'λέγει',
    answers: ['hij zegt', 'zij zegt', 'het zegt'],
    explanation: 'hij/zij/het zegt (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύει',
    answers: ['hij maakt los', 'zij maakt los', 'het maakt los'],
    explanation:
      'hij/zij/het maakt los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένει',
    answers: [
      'hij blijft',
      'zij blijft',
      'het blijft',
      'hij begeleidt',
      'zij begeleidt',
      'het begeleidt',
      'hij houdt een optocht',
      'zij houdt een optocht',
      'het houdt een optocht'
    ],
    explanation:
      'hij/zij/het blijft, hij/zij/het begeleidt, hij/zij/het houdt een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπει',
    answers: ['hij zendt', 'zij zendt', 'het zendt'],
    explanation: 'hij/zij/het zendt',
    type: 'woordenschat'
  },
  {
    question: 'σῴζει',
    answers: ['hij redt', 'zij redt', 'het redt'],
    explanation: 'hij/zij/het redt (soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλομεν',
    answers: ['wij werpen'],
    explanation: 'wij werpen',
    type: 'woordenschat'
  },
  {
    question: 'βλέπομεν',
    answers: ['wij zien'],
    explanation: 'wij zien',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκομεν',
    answers: ['wij weten', 'wij kennen'],
    explanation: 'wij weten, wij kennen (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφομεν',
    answers: ['wij schrijven'],
    explanation: 'wij schrijven (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρομεν',
    answers: ['wij wekken op'],
    explanation: 'wij wekken op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίομεν',
    answers: ['wij eten'],
    explanation: 'wij eten',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκομεν',
    answers: ['wij vinden'],
    explanation: 'wij vinden (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχομεν',
    answers: ['wij hebben'],
    explanation: 'wij hebben',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύομεν',
    answers: ['wij genezen', 'wij helen'],
    explanation: 'wij genezen, wij helen (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνομεν',
    answers: ['wij oordelen', 'wij scheiden', 'wij onderscheiden'],
    explanation: 'wij oordelen, wij scheiden, wij onderscheiden (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνομεν',
    answers: ['wij nemen'],
    explanation: 'wij nemen',
    type: 'woordenschat'
  },
  {
    question: 'λέγομεν',
    answers: ['wij zeggen'],
    explanation: 'wij zeggen (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύομεν',
    answers: ['wij maken los'],
    explanation: 'wij maken los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένομεν',
    answers: ['wij blijven', 'wij begeleiden', 'wij houden een optocht'],
    explanation: 'wij blijven, wij begeleiden, wij houden een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπομεν',
    answers: ['wij zenden'],
    explanation: 'wij zenden',
    type: 'woordenschat'
  },
  {
    question: 'σῴζομεν',
    answers: ['wij redden'],
    explanation: 'wij redden (soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλετε',
    answers: ['jullie werpen'],
    explanation: 'jullie werpen',
    type: 'woordenschat'
  },
  {
    question: 'βλέπετε',
    answers: ['jullie zien'],
    explanation: 'jullie zien',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκετε',
    answers: ['jullie weten', 'jullie kennen'],
    explanation: 'jullie weten, jullie kennen (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφετε',
    answers: ['jullie schrijven'],
    explanation: 'jullie schrijven (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρετε',
    answers: ['jullie wekken op'],
    explanation: 'jullie wekken op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίετε',
    answers: ['jullie eten'],
    explanation: 'jullie eten',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκετε',
    answers: ['jullie vinden'],
    explanation: 'jullie vinden (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχετε',
    answers: ['jullie hebben'],
    explanation: 'jullie hebben',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύετε',
    answers: ['jullie genezen', 'jullie helen'],
    explanation: 'jullie genezen, jullie helen (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνετε',
    answers: ['jullie oordelen', 'jullie scheiden', 'jullie onderscheiden'],
    explanation: 'jullie oordelen, jullie scheiden, jullie onderscheiden (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνετε',
    answers: ['jullie nemen'],
    explanation: 'jullie nemen',
    type: 'woordenschat'
  },
  {
    question: 'λέγετε',
    answers: ['jullie zeggen'],
    explanation: 'jullie zeggen (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύετε',
    answers: ['jullie maken los'],
    explanation: 'jullie maken los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένετε',
    answers: ['jullie blijven', 'jullie begeleiden', 'jullie houden een optocht'],
    explanation: 'jullie blijven, jullie begeleiden, jullie houden een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπετε',
    answers: ['jullie zenden'],
    explanation: 'jullie zenden',
    type: 'woordenschat'
  },
  {
    question: 'σῴζετε',
    answers: ['jullie redden'],
    explanation: 'jullie redden (soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'βάλλουσιν',
    answers: ['ze werpen', 'zij werpen'],
    explanation: 'ze/zij werpen',
    type: 'woordenschat'
  },
  {
    question: 'βλέπουσιν',
    answers: ['ze zien', 'zij zien'],
    explanation: 'ze/zij zien',
    type: 'woordenschat'
  },
  {
    question: 'γινώσκουσιν',
    answers: ['ze weten', 'zij weten', 'ze kennen', 'zij kennen'],
    explanation: 'ze/zij weten, ze/zij kennen (gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'γράφουσιν',
    answers: ['ze schrijven', 'zij schrijven'],
    explanation: 'ze/zij schrijven (graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγείρουσιν',
    answers: ['ze wekken op', 'zij wekken op'],
    explanation: 'ze/zij wekken op',
    type: 'woordenschat'
  },
  {
    question: 'ἐσθίουσιν',
    answers: ['ze eten', 'zij eten'],
    explanation: 'ze/zij eten',
    type: 'woordenschat'
  },
  {
    question: 'εὑρίσκουσιν',
    answers: ['ze vinden', 'zij vinden'],
    explanation: 'ze/zij vinden (heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔχουσιν',
    answers: ['ze hebben', 'zij hebben'],
    explanation: 'ze/zij hebben',
    type: 'woordenschat'
  },
  {
    question: 'θεραπεύουσιν',
    answers: ['ze genezen', 'zij genezen', 'ze helen', 'zij helen'],
    explanation: 'ze/zij genezen, ze/zij helen (therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'κρίνουσιν',
    answers: [
      'ze oordelen',
      'zij oordelen',
      'ze scheiden',
      'zij scheiden',
      'ze onderscheiden',
      'zij onderscheiden'
    ],
    explanation: 'ze/zij oordelen, ze/zij scheiden, ze/zij onderscheiden (kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'λαμβάνουσιν',
    answers: ['ze nemen', 'zij nemen'],
    explanation: 'ze/zij nemen',
    type: 'woordenschat'
  },
  {
    question: 'λέγουσιν',
    answers: ['ze zeggen', 'zij zeggen'],
    explanation: 'ze/zij zeggen (cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'λύουσιν',
    answers: ['ze maken los', 'zij maken los'],
    explanation: 'ze/zij maken los (analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'μένουσιν',
    answers: [
      'ze blijven',
      'zij blijven',
      'ze begeleiden',
      'zij begeleiden',
      'ze houden een optocht',
      'zij houden een optocht'
    ],
    explanation: 'ze/zij blijven, ze/zij begeleiden, ze/zij houden een optocht (Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'πέμπουσιν',
    answers: ['ze zenden', 'zij zenden'],
    explanation: 'ze/zij zenden',
    type: 'woordenschat'
  },
  {
    question: 'σῴζουσιν',
    answers: ['ze redden', 'zij redden'],
    explanation: 'ze/zij redden (soteriologie)',
    type: 'woordenschat'
  },

  // =================================================================================================================================
  // =================================================================================================================================
  // =================================================================================================================================

  {
    question: 'αἰτῶ',
    answers: ['ik vraag'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημῶ',
    answers: ['ik laster', 'ik laster God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογῶ',
    answers: ['ik zegen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητῶ',
    answers: ['ik zoek'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρῶ',
    answers: ['ik kijk', 'ik zie'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλῶ',
    answers: ['ik roep'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλῶ',
    answers: ['ik spreek'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρῶ',
    answers: ['ik getuig'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῶ',
    answers: ['ik heb berouw', 'ik kom tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισῶ',
    answers: ['ik haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιῶ',
    answers: ['ik doe', 'ik maak'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρῶ',
    answers: ['ik onderhoud'],
    type: 'woordenschat'
  },
  {
    question: 'φιλῶ',
    answers: ['ik hou van', 'ik houd van', 'ik heb lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖς',
    answers: ['jij vraagt', 'u vraagt'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖς',
    answers: ['jij lastert', 'u lastert', 'jij lastert God', 'u lastert God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖς',
    answers: ['jij zegent', 'u zegent'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖς',
    answers: ['jij zoekt', 'u zoekt'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖς',
    answers: ['jij kijkt', 'u kijkt', 'jij ziet', 'u ziet'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖς',
    answers: ['jij roept', 'u roept'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖς',
    answers: ['jij spreekt', 'u spreekt'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖς',
    answers: ['jij getuigt', 'u getuigt'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖς',
    answers: [
      'jij hebt berouw',
      'u heeft berouw',
      'jij komt tot andere gedachten',
      'u komt tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖς',
    answers: ['jij haat', 'u haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖς',
    answers: ['jij doet', 'u doet', 'jij maakt', 'u maakt'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖς',
    answers: ['jij onderhoudt', 'u onderhoudt'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖς',
    answers: ['jij houdt van', 'u houdt van', 'jij hebt lief', 'u heeft lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖ',
    answers: ['hij vraagt', 'zij vraagt', 'het vraagt'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖ',
    answers: [
      'hij lastert',
      'zij lastert',
      'het lastert',
      'hij lastert God',
      'zij lastert God',
      'het lastert God'
    ],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖ',
    answers: ['hij zegent', 'zij zegent', 'het zegent'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖ',
    answers: ['hij zoekt', 'zij zoekt', 'het zoekt'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖ',
    answers: ['hij kijkt', 'zij kijkt', 'het kijkt', 'hij ziet', 'zij ziet', 'het ziet'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖ',
    answers: ['hij roept', 'zij roept', 'het roept'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖ',
    answers: ['hij spreekt', 'zij spreekt', 'het spreekt'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖ',
    answers: ['hij getuigt', 'zij getuigt', 'het getuigt'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖ',
    answers: [
      'hij heeft berouw',
      'zij heeft berouw',
      'het heeft berouw',
      'hij komt tot andere gedachten',
      'zij komt tot andere gedachten',
      'het komt tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖ',
    answers: ['hij haat', 'zij haat', 'het haat'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖ',
    answers: ['hij doet', 'zij doet', 'het doet', 'hij maakt', 'zij maakt', 'het maakt'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖ',
    answers: ['hij onderhoudt', 'zij onderhoudt', 'het onderhoudt'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖ',
    answers: [
      'hij houdt van',
      'zij houdt van',
      'het houdt van',
      'hij heeft lief',
      'zij heeft lief',
      'het heeft lief'
    ],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτοῦμεν',
    answers: ['wij vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦμεν',
    answers: ['wij lasteren', 'wij lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦμεν',
    answers: ['wij zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦμεν',
    answers: ['wij zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦμεν',
    answers: ['wij kijken', 'wij zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦμεν',
    answers: ['wij roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλοῦμεν',
    answers: ['wij spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυροῦμεν',
    answers: ['wij getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῦμεν',
    answers: ['wij hebben berouw', 'wij komen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦμεν',
    answers: ['wij haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιοῦμεν',
    answers: ['wij doen', 'wij maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦμεν',
    answers: ['wij onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλοῦμεν',
    answers: ['wij houden van', 'wij hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτεῖτε',
    answers: ['jullie vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημεῖτε',
    answers: ['jullie lasteren', 'jullie lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογεῖτε',
    answers: ['jullie zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητεῖτε',
    answers: ['jullie zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωρεῖτε',
    answers: ['jullie kijken', 'jullie zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλεῖτε',
    answers: ['jullie roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλεῖτε',
    answers: ['jullie spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυρεῖτε',
    answers: ['jullie getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοεῖτε',
    answers: ['jullie hebben berouw', 'jullie komen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισεῖτε',
    answers: ['jullie haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιεῖτε',
    answers: ['jullie doen', 'jullie maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηρεῖτε',
    answers: ['jullie onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλεῖτε',
    answers: ['jullie houden van', 'jullie hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'αἰτοῦσιν',
    answers: ['ze vragen', 'zij vragen'],
    type: 'woordenschat'
  },
  {
    question: 'βλασφημοῦσιν',
    answers: ['ze lasteren', 'zij lasteren', 'ze lasteren God', 'zij lasteren God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'εὐλογοῦσιν',
    answers: ['ze zegenen', 'zij zegenen'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ζητοῦσιν',
    answers: ['ze zoeken', 'zij zoeken'],
    type: 'woordenschat'
  },
  {
    question: 'θεωροῦσιν',
    answers: ['ze kijken', 'zij kijken', 'ze zien', 'zij zien'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'καλοῦσιν',
    answers: ['ze roepen', 'zij roepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'λαλοῦσιν',
    answers: ['ze spreken', 'zij spreken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'μαρτυροῦσιν',
    answers: ['ze getuigen', 'zij getuigen'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'μετανοῦσιν',
    answers: [
      'ze hebben berouw',
      'zij hebben berouw',
      'ze komen tot andere gedachten',
      'zij komen tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'μισοῦσιν',
    answers: ['ze haten', 'zij haten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ποιοῦσιν',
    answers: ['ze doen', 'zij doen', 'ze maken', 'zij maken'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'τηροῦσιν',
    answers: ['ze onderhouden', 'zij onderhouden'],
    type: 'woordenschat'
  },
  {
    question: 'φιλοῦσιν',
    answers: ['ze houden van', 'zij houden van', 'ze hebben lief', 'zij hebben lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },

  // =================================================================================================================================
  // =================================================================================================================================
  // =================================================================================================================================

  {
    question: 'ἄγω',
    answers: ['ik leid', 'ik breng', 'ik ga'],
    explanation: '(Onovergankelijk: ik ga)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγω',
    answers: ['ik leid weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγω',
    answers: ['ik breng samen', 'ik verzamel'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγω',
    answers: ['ik vertrek'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρω',
    answers: ['ik draag'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρω',
    answers: ['ik breng', 'ik offer'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούω',
    answers: ['ik hoor'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούω',
    answers: ['ik gehoorzaam', 'ik luister naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκω',
    answers: ['ik lees'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκω',
    answers: ['ik herken'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκω',
    answers: ['ik sterf'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύω',
    answers: ['ik bevrijd'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλω',
    answers: ['ik werp uit', 'ik gooi uit', 'ik zend uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύω',
    answers: ['ik kleed aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνω',
    answers: ['ik ontvang'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγω',
    answers: ['ik open'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκω',
    answers: ['ik leer', 'ik onderwijs'],
    type: 'woordenschat'
  },
  {
    question: 'διώκω',
    answers: ['ik vervolg'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίω',
    answers: ['ik ween'],
    type: 'woordenschat'
  },
  {
    question: 'πείθω',
    answers: ['ik overtuig'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύω',
    answers: ['ik loop over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύω',
    answers: ['ik geloof'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύω',
    answers: ['ik voorspel', 'ik profeteer'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρω',
    answers: ['ik verheug mij'],
    type: 'woordenschat'
  },
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
  },
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
    answers: ['hij brengt samen', 'zij brengt samen', 'het brengt samen', 'hij' +
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
  },
  {
    question: 'ἄγομεν',
    answers: ['wij leiden', 'wij brengen', 'wij gaan'],
    explanation: '(Onovergankelijk: wij gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγομεν',
    answers: ['wij leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγομεν',
    answers: ['wij brengen samen', 'wij verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγομεν',
    answers: ['wij vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρομεν',
    answers: ['wij dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρομεν',
    answers: ['wij brengen', 'wij offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούομεν',
    answers: ['wij horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούομεν',
    answers: ['wij gehoorzamen', 'wij luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκομεν',
    answers: ['wij lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκομεν',
    answers: ['wij herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκομεν',
    answers: ['wij sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύομεν',
    answers: ['wij bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλομεν',
    answers: ['wij werpen uit', 'wij gooien uit', 'wij zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύομεν',
    answers: ['wij kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνομεν',
    answers: ['wij ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγομεν',
    answers: ['wij openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκομεν',
    answers: ['wij leren', 'wij onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκομεν',
    answers: ['wij vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίομεν',
    answers: ['wij wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθομεν',
    answers: ['wij overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύομεν',
    answers: ['wij lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύομεν',
    answers: ['wij geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύομεν',
    answers: ['wij voorspellen', 'wij profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρομεν',
    answers: ['wij verheugen ons'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγετε',
    answers: ['jullie leiden', 'jullie brengen', 'jullie gaan'],
    explanation: '(Onovergankelijk: jullie gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγετε',
    answers: ['jullie leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγετε',
    answers: ['jullie brengen samen', 'jullie verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγετε',
    answers: ['jullie vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρετε',
    answers: ['jullie dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρετε',
    answers: ['jullie brengen', 'jullie offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούετε',
    answers: ['jullie horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούετε',
    answers: ['jullie gehoorzamen', 'jullie luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκετε',
    answers: ['jullie lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκετε',
    answers: ['jullie herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκετε',
    answers: ['jullie sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύετε',
    answers: ['jullie bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλετε',
    answers: ['jullie werpen uit', 'jullie gooien uit', 'jullie zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύετε',
    answers: ['jullie kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνετε',
    answers: ['jullie ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγετε',
    answers: ['jullie openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκετε',
    answers: ['jullie leren', 'jullie onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκετε',
    answers: ['jullie vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίετε',
    answers: ['jullie wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθετε',
    answers: ['jullie overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύετε',
    answers: ['jullie lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύετε',
    answers: ['jullie geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύετε',
    answers: ['jullie voorspellen', 'jullie profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρετε',
    answers: ['jullie verheugen zich', 'jullie verheugen je'],
    type: 'woordenschat'
  },
  {
    question: 'ἄγουσιν',
    answers: ['ze leiden', 'zij leiden', 'ze brengen', 'zij brengen', 'ze gaan', 'zij gaan'],
    explanation: '(Onovergankelijk: ze gaan)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπάγουσιν',
    answers: ['ze leiden weg', 'zij leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνάγουσιν',
    answers: ['ze brengen samen', 'zij brengen samen', 'ze verzamelen', 'zij verzamelen'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπάγουσιν',
    answers: ['ze vertrekken', 'zij vertrekken'],
    explanation: '(onovergankelijk)',
    type: 'woordenschat'
  },
  {
    question: 'φέρουσιν',
    answers: ['ze dragen', 'zij dragen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσφέρουσιν',
    answers: ['ze brengen', 'zij brengen', 'ze offeren', 'zij offeren'],
    type: 'woordenschat'
  },
  {
    question: 'ἀκούουσιν',
    answers: ['ze horen', 'zij horen'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπακούουσιν',
    answers: ['ze gehoorzamen', 'zij gehoorzamen', 'ze luisteren naar', 'zij luisteren naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀναγινώσκουσιν',
    answers: ['ze lezen', 'zij lezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιγινώσκουσιν',
    answers: ['ze herkennen', 'zij herkennen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀποθνῄσκουσιν',
    answers: ['ze sterven', 'zij sterven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπολύουσιν',
    answers: ['ze bevrijden', 'zij bevrijden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκβάλλουσιν',
    answers: ['ze werpen uit', 'zij werpen uit', 'ze gooien uit', 'zij gooien uit', 'ze zenden uit', 'zij zenden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνδύουσιν',
    answers: ['ze kleden aan', 'zij kleden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παραλαμβάνουσιν',
    answers: ['ze ontvangen', 'zij ontvangen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀνοίγουσιν',
    answers: ['ze openen', 'zij openen'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκουσιν',
    answers: ['ze leren', 'zij leren', 'ze onderwijzen', 'zij onderwijzen'],
    type: 'woordenschat'
  },
  {
    question: 'διώκουσιν',
    answers: ['ze vervolgen', 'zij vervolgen'],
    type: 'woordenschat'
  },
  {
    question: 'κλαίουσιν',
    answers: ['ze wenen', 'zij wenen'],
    type: 'woordenschat'
  },
  {
    question: 'πείθουσιν',
    answers: ['ze overtuigen', 'zij overtuigen'],
    type: 'woordenschat'
  },
  {
    question: 'περισσεύουσιν',
    answers: ['ze lopen over', 'zij lopen over'],
    type: 'woordenschat'
  },
  {
    question: 'πιστεύουσιν',
    answers: ['ze geloven', 'zij geloven'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'προφητεύουσιν',
    answers: ['ze voorspellen', 'zij voorspellen', 'ze profeteren', 'zij profeteren'],
    type: 'woordenschat'
  },
  {
    question: 'χαίρουσιν',
    answers: ['ze verheugen zich', 'zij verheugen zich'],
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
const lesson18ConjugationsImpPP: LessonType = {
  id: 'lesson18-conjugations-imppp',
  name: 'Les 18 – Imperatief presens passief',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson18ConjugationsImpPP
