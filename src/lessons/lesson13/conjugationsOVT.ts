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





















//===========================================================================================================
//================================================== TO DO ==================================================
//===========================================================================================================
  {
    question: 'ἄγω',
    answers: ['ik leid', 'ik breng', 'ik ga'],
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
    answers: ['jullie verheugen ons'],
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
