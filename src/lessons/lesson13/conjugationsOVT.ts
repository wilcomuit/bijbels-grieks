const questions: Array<QuestionType> = [
  {
    question: 'ἔβάλλον',
    answers: ['ik wierp', 'ze wierpen', 'zij wierpen'],
    type: 'woordenschat'
  },
  {
    question: 'ἔβλέπον',
    answers: ['ik zag', 'ze zagen', 'zij zagen'],
    type: 'woordenschat'
  },
  {
    question: 'ἔγινώσκον',
    answers: ['ik wist', 'ik kende', 'ze wisten', 'zij wisten', 'ze kenden', 'zij kenden'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'ἔγράφον',
    answers: ['ik schreef', 'ze schreven', 'zij schreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἤγείρον',
    answers: ['ik wekte op', 'ze wekten op', 'zij wekten op'],
    type: 'woordenschat'
  },
  {
    question: 'ἤσθίον',
    answers: ['ik at', 'ze aten', 'zij aten'],
    type: 'woordenschat'
  },
  {
    question: 'ηὕρίσκον',
    answers: ['ik vond', 'ze vonden', 'zij vonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'εἶχον',
    answers: ['ik had', 'ze hadden', 'zij hadden'],
    type: 'woordenschat'
  },
  {
    question: 'ἔθεραπεύον',
    answers: ['ik genas', 'ik heelde', 'ze genazen', 'zij genazen', 'ze heelden', 'zij heelden'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔκρίνον',
    answers: [
      'ik oordeelde',
      'ik scheidde',
      'ik onderscheidde',
      'ze oordeelden',
      'zij oordeelden',
      'ze scheidden',
      'zij scheidden',
      'ze onderscheidden',
      'zij onderscheidden'
    ],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλαμβάνον',
    answers: ['ik nam', 'ze namen', 'zij namen'],
    type: 'woordenschat'
  },
  {
    question: 'ἔλέγον',
    answers: ['ik zegde', 'ik zei', 'ze zegden', 'ze zeiden', 'zij zegden', 'zij zeiden'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλύον',
    answers: ['ik maakte los', 'ze maakten los', 'zij maakten los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'ἔμένον',
    answers: [
      'ik bleef',
      'ik begeleidde',
      'ik hield een optocht',
      'ze bleven',
      'zij bleven',
      'ze begeleidden',
      'zij begeleidden',
      'ze hielden een optocht',
      'zij hielden een optocht'
    ],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'ἔπέμπον',
    answers: ['ik zond', 'ze zonden', 'zij zonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσῴζον',
    answers: ['ik redde', 'ze redden', 'zij redden'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔβάλλες',
    answers: ['jij wierp', 'u wierp'],
    type: 'woordenschat'
  },
  {
    question: 'ἔβλέπες',
    answers: ['jij zag', 'u zag'],
    type: 'woordenschat'
  },
  {
    question: 'ἔγινώσκες',
    answers: ['jij wist', 'u wist', 'jij kende', 'u kende'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'ἔγράφες',
    answers: ['jij schreef', 'u schreef'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἤγείρες',
    answers: ['jij wekte op', 'u wekte op'],
    type: 'woordenschat'
  },
  {
    question: 'ἤσθίες',
    answers: ['jij at', 'u at'],
    type: 'woordenschat'
  },
  {
    question: 'ηὕρίσκες',
    answers: ['jij vond', 'u vond'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'εἶχες',
    answers: ['jij had', 'u had', 'u had'],
    type: 'woordenschat'
  },
  {
    question: 'ἔθεραπεύες',
    answers: ['jij genas', 'u genas', 'jij heelde', 'u heelde'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔκρίνες',
    answers: [
      'jij oordeelde',
      'u oordeelde',
      'jij scheidde',
      'u scheidde',
      'jij onderscheidde',
      'u onderscheidde'
    ],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλαμβάνες',
    answers: ['jij nam', 'u nam'],
    type: 'woordenschat'
  },
  {
    question: 'ἔλέγες',
    answers: ['jij zegde', 'jij zei', 'u zegde', 'u zei'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλύες',
    answers: ['jij maakte los', 'u maakte los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'ἔμένες',
    answers: [
      'jij bleef',
      'u bleef',
      'jij begeleidde',
      'u begeleidde',
      'jij hield een optocht',
      'u hield een optocht'
    ],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'ἔπέμπες',
    answers: ['jij zond', 'u zond'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσῴζες',
    answers: ['jij redde', 'u redde'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔβάλλε',
    answers: ['hij wierp', 'zij wierp', 'het wierp'],
    type: 'woordenschat'
  },
  {
    question: 'ἔβλέπε',
    answers: ['hij zag', 'zij zag', 'het zag'],
    type: 'woordenschat'
  },
  {
    question: 'ἔγινώσκε',
    answers: ['hij wist', 'zij wist', 'het wist', 'hij kende', 'zij kende', 'het kende'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'ἔγράφε',
    answers: ['hij schreef', 'zij schreef', 'het schreef'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἤγείρε',
    answers: ['hij wekte op', 'zij wekte op', 'het wekte op'],
    type: 'woordenschat'
  },
  {
    question: 'ἤσθίε',
    answers: ['hij at', 'zij at', 'het at'],
    type: 'woordenschat'
  },
  {
    question: 'ηὕρίσκε',
    answers: ['hij vond', 'zij vond', 'het vond'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'εἶχε',
    answers: ['hij had', 'zij had', 'het had'],
    type: 'woordenschat'
  },
  {
    question: 'ἔθεραπεύε',
    answers: ['hij genas', 'zij genas', 'het genas', 'hij heelde', 'zij heelde', 'het heelde'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'ἔκρίνε',
    answers: [
      'hij oordeelde',
      'zij oordeelde',
      'het oordeelde',
      'hij scheidde',
      'zij scheidde',
      'het scheidde',
      'hij onderscheidde',
      'zij onderscheidde',
      'het onderscheidde'
    ],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλαμβάνε',
    answers: ['hij nam', 'zij nam', 'het nam'],
    type: 'woordenschat'
  },
  {
    question: 'ἔλέγε',
    answers: ['hij zegde', 'hij zei', 'zij zegde', 'zij zei', 'het zegde', 'het zei'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'ἔλύε',
    answers: ['hij maakte los', 'zij maakte los', 'het maakte los'],
    explanation:
      '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'ἔμένε',
    answers: [
      'hij bleef',
      'zij bleef',
      'het bleef',
      'hij begeleidde',
      'zij begeleidde',
      'het begeleidde',
      'hij hield een optocht',
      'zij hield een optocht',
      'het hield een optocht'
    ],
    explanation:
      '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'ἔπέμπε',
    answers: ['hij zond', 'zij zond', 'het zond'],
    type: 'woordenschat'
  },
  {
    question: 'ἔσῴζε',
    answers: ['hij redde', 'zij redde', 'het redde'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐβάλλομεν',
    answers: ['wij wierpen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλέπομεν',
    answers: ['wij zagen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐγινώσκομεν',
    answers: ['wij wisten', 'wij kenden'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγράφομεν',
    answers: ['wij schreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἠγείρομεν',
    answers: ['wij wekten op'],
    type: 'woordenschat'
  },
  {
    question: 'ἠσθίομεν',
    answers: ['wij aten'],
    type: 'woordenschat'
  },
  {
    question: 'ηὑρίσκομεν',
    answers: ['wij vonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'εἶχομεν',
    answers: ['wij hadden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεραπεύομεν',
    answers: ['wij genazen', 'wij heelden'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρίνομεν',
    answers: ['wij oordeelden', 'wij scheidden', 'wij onderscheidden'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαμβάνομεν',
    answers: ['wij namen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐλέγομεν',
    answers: ['wij zegden', 'wij zeiden'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλύομεν',
    answers: ['wij maakten los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμένομεν',
    answers: ['wij bleven', 'wij begeleidden', 'wij hielden een optocht'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπέμπομεν',
    answers: ['wij zonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσῴζομεν',
    answers: ['wij redden'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐβάλλετε',
    answers: ['jullie wierpen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλέπετε',
    answers: ['jullie zagen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐγινώσκετε',
    answers: ['jullie wisten', 'jullie kenden'],
    explanation: '(gnostisch, gnosis)',
    type: 'woordenschat'
  },
  {
    question: 'ἐγράφετε',
    answers: ['jullie schreven'],
    explanation: '(graffiti, grafiek, grafiet, grafologie, geografie)',
    type: 'woordenschat'
  },
  {
    question: 'ἠγείρετε',
    answers: ['jullie wekten op'],
    type: 'woordenschat'
  },
  {
    question: 'ἠσθίετε',
    answers: ['jullie aten'],
    type: 'woordenschat'
  },
  {
    question: 'ηὑρίσκετε',
    answers: ['jullie vonden'],
    explanation: '(heuristiek)',
    type: 'woordenschat'
  },
  {
    question: 'εἶχετε',
    answers: ['jullie hadden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεραπεύετε',
    answers: ['jullie genazen', 'jullie heelden'],
    explanation: '(therapeut, therapie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκρίνετε',
    answers: ['jullie oordeelden', 'jullie scheidden', 'jullie onderscheidden'],
    explanation: '(kritiek)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαμβάνετε',
    answers: ['jullie namen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐλέγετε',
    answers: ['jullie zegden', 'jullie zeiden'],
    explanation: '(cf. Latijn: legere: lezen, cf. lectuur)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλύετε',
    answers: ['jullie maakten los'],
    explanation: '(analyse, katalyse, katalysator, vgl. Ned.: los, verlossen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμένετε',
    answers: ['jullie bleven', 'jullie begeleidden', 'jullie hielden een optocht'],
    explanation: '(Eng.: I remain)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπέμπετε',
    answers: ['jullie zonden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐσῴζετε',
    answers: ['jullie redden'],
    explanation: '(soteriologie)',
    type: 'woordenschat'
  },
  {
    question: 'ῃτουν',
    answers: ['ik vroeg', 'ze vroegen', 'zij vroegen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλασφημουν',
    answers: ['ik lasterde', 'ik lasterde God', 'ze lasterden', 'zij lasterden', 'ze lasterden God', 'zij lasterden God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐλογουν',
    answers: ['ik zegende', 'ze zegenden', 'zij zegenden'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ἐζητουν',
    answers: ['ik zocht', 'ze zochten', 'zij zochten'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεωρουν',
    answers: ['ik keek', 'ik zag', 'ze keken', 'zij keken', 'ze zagen', 'zij zagen'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκαλουν',
    answers: ['ik riep', 'ze riepen', 'zij riepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαλουν',
    answers: ['ik sprak', 'ze spraken', 'zij spraken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμαρτυρουν',
    answers: ['ik getuigde', 'ze getuigden', 'zij getuigden'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμετανοουν',
    answers: [
      'ik had berouw',
      'ik kwam tot andere gedachten',
      'ze hadden berouw',
      'zij hadden berouw',
      'ze kwamen tot andere gedachten',
      'zij kwamen tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμισουν',
    answers: ['ik haatte', 'ze haatten', 'zij haatten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ἐποιουν',
    answers: ['ik deed', 'ik maakte', 'ze deden', 'zij deden', 'ze maakten', 'zij maakten'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐτηρουν',
    answers: ['ik onderhield', 'ze onderhielden', 'zij onderhielden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφιλουν',
    answers: ['ik hield van', 'ik had lief', 'ze hielden van', 'zij hielden van', 'ze hadden lief', 'zij hadden lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'ῃτεις',
    answers: ['jij vroeg', 'u vroeg'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλασφημεις',
    answers: ['jij lasterde', 'u lasterde', 'jij lasterde God', 'u lasterde God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐλογεις',
    answers: ['jij zegende', 'u zegende'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ἐζητεις',
    answers: ['jij zocht', 'u zocht'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεωρεις',
    answers: ['jij keek', 'u keek', 'jij zag', 'u zag'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκαλεις',
    answers: ['jij riep', 'u riep'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαλεις',
    answers: ['jij sprak', 'u sprak'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμαρτυρεις',
    answers: ['jij getuigde', 'u getuigde'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμετανοεις',
    answers: [
      'jij had berouw',
      'u had berouw',
      'jij kwam tot andere gedachten',
      'u kwam tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμισεις',
    answers: ['jij haatte', 'u haatte'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ἐποιεις',
    answers: ['jij deed', 'u deed', 'jij maakte', 'u maakte'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐτηρεις',
    answers: ['jij onderhield', 'u onderhield'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφιλεις',
    answers: ['jij hield van', 'u hield van', 'jij had lief', 'u had lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'ῃτει',
    answers: ['hij vroeg', 'zij vroeg', 'het vroeg'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλασφημει',
    answers: [
      'hij lasterde',
      'zij lasterde',
      'het lasterde',
      'hij lasterde God',
      'zij lasterde God',
      'het lasterde God'
    ],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐλογει',
    answers: ['hij zegende', 'zij zegende', 'het zegende'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ἐζητει',
    answers: ['hij zocht', 'zij zocht', 'het zocht'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεωρει',
    answers: ['hij keek', 'zij keek', 'het keek', 'hij zag', 'zij zag', 'het zag'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκαλει',
    answers: ['hij riep', 'zij riep', 'het riep'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαλει',
    answers: ['hij sprak', 'zij sprak', 'het sprak'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμαρτυρει',
    answers: ['hij getuigde', 'zij getuigde', 'het getuigde'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμετανοει',
    answers: [
      'hij had berouw',
      'zij had berouw',
      'het had berouw',
      'hij kwam tot andere gedachten',
      'zij kwam tot andere gedachten',
      'het kwam tot andere gedachten'
    ],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμισει',
    answers: ['hij haatte', 'zij haatte', 'het haatte'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ἐποιει',
    answers: ['hij deed', 'zij deed', 'het deed', 'hij maakte', 'zij maakte', 'het maakte'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐτηρει',
    answers: ['hij onderhield', 'zij onderhield', 'het onderhield'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφιλει',
    answers: [
      'hij hield van',
      'zij hield van',
      'het hield van',
      'hij had lief',
      'zij had lief',
      'het had lief'
    ],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'ῃτοῦμεν',
    answers: ['wij vroegen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλασφημοῦμεν',
    answers: ['wij lasterden', 'wij lasterden God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐλογοῦμεν',
    answers: ['wij zegenden'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ἐζητοῦμεν',
    answers: ['wij zochten'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεωροῦμεν',
    answers: ['wij keken', 'wij zagen'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκαλοῦμεν',
    answers: ['wij riepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαλοῦμεν',
    answers: ['wij spraken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμαρτυροῦμεν',
    answers: ['wij getuigden'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμετανοῦμεν',
    answers: ['wij hadden berouw', 'wij kwamen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμισοῦμεν',
    answers: ['wij haatten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ἐποιοῦμεν',
    answers: ['wij deden', 'wij maakten'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐτηροῦμεν',
    answers: ['wij onderhielden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφιλοῦμεν',
    answers: ['wij hielden van', 'wij hadden lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'ῃτεῖτε',
    answers: ['jullie vroegen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐβλασφημεῖτε',
    answers: ['jullie lasterden', 'jullie lasterden God'],
    explanation: '(vgl. blasfemeren)',
    type: 'woordenschat'
  },
  {
    question: 'ηὐλογεῖτε',
    answers: ['jullie zegenden'],
    explanation: '(εὐ = goed + λέγω = ik zeg)',
    type: 'woordenschat'
  },
  {
    question: 'ἐζητεῖτε',
    answers: ['jullie zochten'],
    type: 'woordenschat'
  },
  {
    question: 'ἐθεωρεῖτε',
    answers: ['jullie keken', 'jullie zagen'],
    explanation: '(theorie, theoretisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐκαλεῖτε',
    answers: ['jullie riepen'],
    explanation: '(kallen, Eng. I call)',
    type: 'woordenschat'
  },
  {
    question: 'ἐλαλεῖτε',
    answers: ['jullie spraken'],
    explanation: '(lallen, lollen)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμαρτυρεῖτε',
    answers: ['jullie getuigden'],
    explanation: '(martelaar, martyrologie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμετανοεῖτε',
    answers: ['jullie hadden berouw', 'jullie kwamen tot andere gedachten'],
    explanation: '(metanoëtisch, metanoia)',
    type: 'woordenschat'
  },
  {
    question: 'ἐμισεῖτε',
    answers: ['jullie haatten'],
    explanation: '(misantroop, misogyn)',
    type: 'woordenschat'
  },
  {
    question: 'ἐποιεῖτε',
    answers: ['jullie deden', 'jullie maakten'],
    explanation: '(poëzie)',
    type: 'woordenschat'
  },
  {
    question: 'ἐτηρεῖτε',
    answers: ['jullie onderhielden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφιλεῖτε',
    answers: ['jullie hielden van', 'jullie hadden lief'],
    explanation: '(filantroop, filatelist, filologie, filosofie, xenofilie)',
    type: 'woordenschat'
  },
  {
    question: 'ηγον',
    answers: ['ik leidde', 'ik bracht', 'ik ging', 'ze leidden', 'zij leidden', 'ze brachten', 'zij brachten', 'ze gingen', 'zij gingen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπηγον',
    answers: ['ik leidde weg', 'ze leidden weg', 'zij leiden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνηγον',
    answers: ['ik bracht samen', 'ik verzamelde', 'ze brachten samen', 'zij brachten samen', 'ze verzamelden', 'zij verzamelden'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηγον',
    answers: ['ik vertrok', 'ze vertrokken', 'zij vertrokken'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφέρον',
    answers: ['ik droeg', 'ze droegen', 'zij droegen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐφέρον',
    answers: ['ik bracht', 'ik offerde', 'ze brachten', 'zij brachten', 'ze offerden', 'zij offerden'],
    type: 'woordenschat'
  },
  {
    question: 'ηκούον',
    answers: ['ik hoorde', 'ze hoorden', 'zij hoorden'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηκούον',
    answers: ['ik gehoorzaamde', 'ik luisterde naar', 'ze gehoorzaamden', 'zij gehoorzaamden', 'ze luisterden naar', 'zij luisterden naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀνἐγινώσκον',
    answers: ['ik las', 'ze lazen', 'zij lazen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπἐγινώσκον',
    answers: ['ik herkende', 'ze herkenden', 'zij herkenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐθνῄσκον',
    answers: ['ik stierf', 'ze stierven', 'zij stierven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐλύον',
    answers: ['ik bevrijdde', 'ze bevrijdden', 'zij bevrijdden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξἐβάλλον',
    answers: ['ik wierp uit', 'ik gooide uit', 'ik zond uit', 'ze wierpen uit', 'zij wierpen uit', 'ze gooiden uit', 'zij gooiden uit', 'ze zonden uit', 'zij zonden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνἐδύον',
    answers: ['ik kleedde aan', 'ze kleedden aan', 'zij kleedden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παρἐλαμβάνον',
    answers: ['ik ontving', 'ze ontving', 'zij ontving'],
    type: 'woordenschat'
  },
  {
    question: 'ηνοίγον',
    answers: ['ik opende', 'ze openden', 'zij openden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιδάσκον',
    answers: ['ik leerde', 'ik onderwees', 'ze leerden', 'zij leerden', 'ze onderwezen', 'zij onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιώκον',
    answers: ['ik vervolgde', 'ze vervolgden', 'zij vervolgden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκλαίον',
    answers: ['ik weende', 'ze weenden', 'zij weenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπείθον',
    answers: ['ik overtuigde', 'ze overtuigden', 'zij overtuigden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπερισσεύον',
    answers: ['ik liep over', 'ze liepen over', 'zij liepen over'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστεύον',
    answers: ['ik geloofde', 'ze geloofden', 'zij geloofden'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπροφητεύον',
    answers: ['ik voorspelde', 'ik profeteerde', 'ze voorspelden', 'zij voorspelden', 'ze profeteerden', 'zij profeteerden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐχαίρον',
    answers: ['ik verheugde mij', 'ze verheugden zich', 'zij verheugden zich'],
    type: 'woordenschat'
  },
  {
    question: 'ηγες',
    answers: ['jij leidde', 'u leidde', 'jij bracht', 'u bracht', 'jij ging', 'u ging'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπηγες',
    answers: ['jij leidde weg', 'u leidde weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνηγες',
    answers: ['jij bracht samen', 'u bracht samen', 'jij verzamelde', 'u verzamelde'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηγες',
    answers: ['jij vertrok', 'u vertrok'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφέρες',
    answers: ['jij droeg', 'u droeg'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐφέρες',
    answers: ['jij bracht', 'u bracht', 'jij offerde', 'u offerde'],
    type: 'woordenschat'
  },
  {
    question: 'ηκούες',
    answers: ['jij hoorde', 'u hoorde'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηκούες',
    answers: ['jij gehoorzaamde', 'u gehoorzaamde', 'jij luisterde naar', 'u luisterde naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀνἐγινώσκες',
    answers: ['jij las', 'u las'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπἐγινώσκες',
    answers: ['jij herkende', 'u herkende'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐθνῄσκες',
    answers: ['jij stierf', 'u stierf'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐλύες',
    answers: ['jij bevrijdde', 'u bevrijdde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξἐβάλλες',
    answers: ['jij wierp uit', 'u wierp uit', 'jij gooide uit', 'u gooide uit', 'jij zond uit', 'u zond uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνἐδύες',
    answers: ['jij kleedde aan', 'u kleedde aan'],
    type: 'woordenschat'
  },
  {
    question: 'παρἐλαμβάνες',
    answers: ['jij ontving', 'u ontving'],
    type: 'woordenschat'
  },
  {
    question: 'ηνοίγες',
    answers: ['jij opende', 'u opende'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιδάσκες',
    answers: ['jij leerde', 'u leerde', 'jij onderwees', 'u onderwees'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιώκες',
    answers: ['jij vervolgde', 'u vervolgde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκλαίες',
    answers: ['jij weende', 'u weende'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπείθες',
    answers: ['jij overtuigde', 'u overtuigde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπερισσεύες',
    answers: ['jij liep over', 'u liep over'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστεύες',
    answers: ['jij geloofde', 'u geloofde'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπροφητεύες',
    answers: ['jij voorspelde', 'u voorspelde', 'jij profeteerde', 'u profeteerde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐχαίρες',
    answers: ['jij verheugde je', 'u verheugde zich'],
    type: 'woordenschat'
  },
  {
    question: 'ηγε',
    answers: ['hij leidde', 'zij leidde', 'het leidde', 'hij bracht', 'zij bracht', 'het bracht', 'hij ging', 'zij ging', 'het ging'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπηγε',
    answers: ['hij leidde weg', 'zij leidde weg', 'het leidde weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνηγε',
    answers: ['hij bracht samen', 'zij bracht samen', 'het bracht samen', 'hij verzamelde', 'zij verzamelde', 'het verzamelde'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηγε',
    answers: ['hij vertrok', 'zij vertrok', 'het vertrok'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφέρε',
    answers: ['hij droeg', 'zij droeg', 'het droeg'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐφέρε',
    answers: ['hij bracht', 'zij bracht', 'het bracht', 'hij offerde', 'zij offerde', 'het offerde'],
    type: 'woordenschat'
  },
  {
    question: 'ηκούε',
    answers: ['hij hoorde', 'zij hoorde', 'het hoorde'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηκούε',
    answers: ['hij gehoorzaamde', 'zij gehoorzaamde', 'het gehoorzaamde', 'hij luisterde naar', 'zij luisterde naar', 'het luisterde naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀνἐγινώσκε',
    answers: ['hij las', 'zij las', 'het las'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπἐγινώσκε',
    answers: ['hij herkende', 'zij herkende', 'het herkende'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐθνῄσκε',
    answers: ['hij stierf', 'zij stierf', 'het stierf'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐλύε',
    answers: ['hij bevrijdde', 'zij bevrijdde', 'het bevrijdde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξἐβάλλε',
    answers: ['hij wierp uit', 'zij wierp uit', 'het wierp uit', 'hij gooide uit', 'zij gooide uit', 'het gooide uit', 'hij zond uit', 'zij zond uit', ' het zond uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνἐδύε',
    answers: ['hij kleedde aan', 'zij kleedde aan', 'het kleedde aan'],
    type: 'woordenschat'
  },
  {
    question: 'παρἐλαμβάνε',
    answers: ['hij ontving', 'zij ontving', 'het ontving'],
    type: 'woordenschat'
  },
  {
    question: 'ηνοίγε',
    answers: ['hij opende', 'zij opende', 'het opende'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιδάσκε',
    answers: ['hij leerde', 'zij leertde', 'het leerde', 'hij onderwees', 'zij onderwees', 'het onderwees'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιώκε',
    answers: ['hij vervolgde', 'zij vervolgde', 'het vervolgde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκλαίε',
    answers: ['hij weende', 'zij weende', 'het weende'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπείθε',
    answers: ['hij overtuigde', 'zij overtuigde', 'het overtuigde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπερισσεύε',
    answers: ['hij liep over', 'zij liep over', 'het liep over'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστεύε',
    answers: ['hij geloofde', 'zij geloofde', 'het geloofde'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπροφητεύε',
    answers: ['hij voorspelde', 'zij voorspelde', 'het voorspelde', 'hij profeteerde', 'zij profeteerde', 'het profeteerde'],
    type: 'woordenschat'
  },
  {
    question: 'ἐχαίρε',
    answers: ['hij verheugde zich', 'zij verheugde zich', 'het verheugde zich'],
    type: 'woordenschat'
  },
  {
    question: 'ηγομεν',
    answers: ['wij leidden', 'wij brachten', 'wij gingen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπηγομεν',
    answers: ['wij leidden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνηγομεν',
    answers: ['wij brachten samen', 'wij verzamelden'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηγομεν',
    answers: ['wij vertrokken'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφέρομεν',
    answers: ['wij droegen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐφέρομεν',
    answers: ['wij brachten', 'wij offerden'],
    type: 'woordenschat'
  },
  {
    question: 'ηκούομεν',
    answers: ['wij hoorden'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηκούομεν',
    answers: ['wij gehoorzaamden', 'wij luisterden naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀνἐγινώσκομεν',
    answers: ['wij lazen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπἐγινώσκομεν',
    answers: ['wij herkenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐθνῄσκομεν',
    answers: ['wij stierven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐλύομεν',
    answers: ['wij bevrijdden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξἐβάλλομεν',
    answers: ['wij wierpen uit', 'wij gooiden uit', 'wij zonden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνἐδύομεν',
    answers: ['wij kleedden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παρἐλαμβάνομεν',
    answers: ['wij ontving'],
    type: 'woordenschat'
  },
  {
    question: 'ηνοίγομεν',
    answers: ['wij openden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιδάσκομεν',
    answers: ['wij leerden', 'wij onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιώκομεν',
    answers: ['wij vervolgden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκλαίομεν',
    answers: ['wij weenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπείθομεν',
    answers: ['wij overtuigden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπερισσεύομεν',
    answers: ['wij liepen over'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστεύομεν',
    answers: ['wij geloofden'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπροφητεύομεν',
    answers: ['wij voorspelden', 'wij profeteerden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐχαίρομεν',
    answers: ['wij verheugden ons'],
    type: 'woordenschat'
  },
  {
    question: 'ηγετε',
    answers: ['jullie leidden', 'jullie brachten', 'jullie gingen'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπηγετε',
    answers: ['jullie leidden weg'],
    type: 'woordenschat'
  },
  {
    question: 'συνηγετε',
    answers: ['jullie brachten samen', 'jullie verzamelden'],
    explanation: '(synagoge)',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηγετε',
    answers: ['jullie vertrokken'],
    type: 'woordenschat'
  },
  {
    question: 'ἐφέρετε',
    answers: ['jullie droegen'],
    explanation: '(vgl. transfer)',
    type: 'woordenschat'
  },
  {
    question: 'προσἐφέρετε',
    answers: ['jullie brachten', 'jullie offerden'],
    type: 'woordenschat'
  },
  {
    question: 'ηκούετε',
    answers: ['jullie hoorden'],
    explanation:
      '(+ acc. van de zaak die ik hoor, maar + gen. van de persoon die ik hoor (akoestiek))',
    type: 'woordenschat'
  },
  {
    question: 'ὑπηκούετε',
    answers: ['jullie gehoorzaamden', 'jullie luisterden naar'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἀνἐγινώσκετε',
    answers: ['jullie lazen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπἐγινώσκετε',
    answers: ['jullie herkenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐθνῄσκετε',
    answers: ['jullie stierven'],
    type: 'woordenschat'
  },
  {
    question: 'ἀπἐλύετε',
    answers: ['jullie bevrijdden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐξἐβάλλετε',
    answers: ['jullie wierpen uit', 'jullie gooiden uit', 'jullie zonden uit'],
    type: 'woordenschat'
  },
  {
    question: 'ἐνἐδύετε',
    answers: ['jullie kleedden aan'],
    type: 'woordenschat'
  },
  {
    question: 'παρἐλαμβάνετε',
    answers: ['jullie ontving'],
    type: 'woordenschat'
  },
  {
    question: 'ηνοίγετε',
    answers: ['jullie openden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιδάσκετε',
    answers: ['jullie leerden', 'jullie onderwezen'],
    type: 'woordenschat'
  },
  {
    question: 'ἐδιώκετε',
    answers: ['jullie vervolgden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐκλαίετε',
    answers: ['jullie weenden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπείθετε',
    answers: ['jullie overtuigden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπερισσεύετε',
    answers: ['jullie liepen over'],
    type: 'woordenschat'
  },
  {
    question: 'ἐπιστεύετε',
    answers: ['jullie geloofden'],
    explanation: '(+ datief)',
    type: 'woordenschat'
  },
  {
    question: 'ἐπροφητεύετε',
    answers: ['jullie voorspelden', 'jullie profeteerden'],
    type: 'woordenschat'
  },
  {
    question: 'ἐχαίρετε',
    answers: ['jullie verheugden zich', 'jullie verheugen je'],
    type: 'woordenschat'
  }
]
const lesson13OVTConjugation: LessonType = {
  id: 'lesson13-ovt-conjugation',
  name: 'Les 13 – Indicatief imperfectum actief',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson13OVTConjugation
