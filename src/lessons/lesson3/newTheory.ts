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
  }
]
const lesson3NewTheory: LessonType = {
  id: 'lesson3-theory-news',
  name: 'Les 3 – Volledige theorie',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson3NewTheory
