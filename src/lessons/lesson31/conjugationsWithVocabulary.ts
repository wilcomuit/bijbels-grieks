const questions: Array<MixedQuestionType> = [
  {
    ev_nominatief: 'ἰχθύς',
    ev_accusatief: 'ἰχθύν',
    ev_genitief: 'ἰχθύος',
    ev_datief: 'ἰχθύι',
    mv_nominatief: 'ἰχθύες',
    mv_accusatief: 'ἰχθύας',
    mv_genitief: 'ἰχθύων',
    mv_datief: 'ἰχθύσιν',
    vocabularyAnswers: ['vis'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'ἀνάστασις',
    ev_accusatief: 'ἀνάστασιν',
    ev_genitief: 'ἀνάστασεως',
    ev_datief: 'ἀνάστασει',
    mv_nominatief: 'ἀνάστασεις',
    mv_accusatief: 'ἀνάστασεις',
    mv_genitief: 'ἀνάστασεων',
    mv_datief: 'ἀνάστασεσιν',
    vocabularyAnswers: ['verrijzenis', 'opstanding'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'ἀποκάλυψις',
    ev_accusatief: 'ἀποκάλυψιν',
    ev_genitief: 'ἀποκάλυψεως',
    ev_datief: 'ἀποκάλυψει',
    mv_nominatief: 'ἀποκάλυψεις',
    mv_accusatief: 'ἀποκάλυψεις',
    mv_genitief: 'ἀποκάλυψεων',
    mv_datief: 'ἀποκάλυψεσιν',
    vocabularyAnswers: ['openbaring'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'ἄφεσις',
    ev_accusatief: 'ἄφεσιν',
    ev_genitief: 'ἄφεσεως',
    ev_datief: 'ἄφεσει',
    mv_nominatief: 'ἄφεσεις',
    mv_accusatief: 'ἄφεσεις',
    mv_genitief: 'ἄφεσεων',
    mv_datief: 'ἄφεσεσιν',
    vocabularyAnswers: ['vergeving'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'γνῶσις',
    ev_accusatief: 'γνῶσιν',
    ev_genitief: 'γνῶσεως',
    ev_datief: 'γνῶσει',
    mv_nominatief: 'γνῶσεις',
    mv_accusatief: 'γνῶσεις',
    mv_genitief: 'γνῶσεων',
    mv_datief: 'γνῶσεσιν',
    vocabularyAnswers: ['kennis'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'δύναμις',
    ev_accusatief: 'δύναμιν',
    ev_genitief: 'δύναμεως',
    ev_datief: 'δύναμει',
    mv_nominatief: 'δύναμεις',
    mv_accusatief: 'δύναμεις',
    mv_genitief: 'δύναμεων',
    mv_datief: 'δύναμεσιν',
    vocabularyAnswers: ['kracht'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'θλῖψις',
    ev_accusatief: 'θλῖψιν',
    ev_genitief: 'θλῖψεως',
    ev_datief: 'θλῖψει',
    mv_nominatief: 'θλῖψεις',
    mv_accusatief: 'θλῖψεις',
    mv_genitief: 'θλῖψεων',
    mv_datief: 'θλῖψεσιν',
    vocabularyAnswers: ['verdrukking', 'moeilijke situatie'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'κρίσις',
    ev_accusatief: 'κρίσιν',
    ev_genitief: 'κρίσεως',
    ev_datief: 'κρίσει',
    mv_nominatief: 'κρίσεις',
    mv_accusatief: 'κρίσεις',
    mv_genitief: 'κρίσεων',
    mv_datief: 'κρίσεσιν',
    vocabularyAnswers: ['oordeel'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'παράδοσις',
    ev_accusatief: 'παράδοσιν',
    ev_genitief: 'παράδοσεως',
    ev_datief: 'παράδοσει',
    mv_nominatief: 'παράδοσεις',
    mv_accusatief: 'παράδοσεις',
    mv_genitief: 'παράδοσεων',
    mv_datief: 'παράδοσεσιν',
    vocabularyAnswers: ['traditie'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'πίστις',
    ev_accusatief: 'πίστιν',
    ev_genitief: 'πίστεως',
    ev_datief: 'πίστει',
    mv_nominatief: 'πίστεις',
    mv_accusatief: 'πίστεις',
    mv_genitief: 'πίστεων',
    mv_datief: 'πίστεσιν',
    vocabularyAnswers: ['geloof'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'πόλις',
    ev_accusatief: 'πόλιν',
    ev_genitief: 'πόλεως',
    ev_datief: 'πόλει',
    mv_nominatief: 'πόλεις',
    mv_accusatief: 'πόλεις',
    mv_genitief: 'πόλεων',
    mv_datief: 'πόλεσιν',
    vocabularyAnswers: ['stad'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'συνείδησις',
    ev_accusatief: 'συνείδησιν',
    ev_genitief: 'συνείδησεως',
    ev_datief: 'συνείδησει',
    mv_nominatief: 'συνείδησεις',
    mv_accusatief: 'συνείδησεις',
    mv_genitief: 'συνείδησεων',
    mv_datief: 'συνείδησεσιν',
    vocabularyAnswers: ['geweten'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'βασιλεύς',
    ev_accusatief: 'βασιλέα',
    ev_genitief: 'βασιλέως',
    ev_datief: 'βασιλεῖ',
    mv_nominatief: 'βασιλεῖς',
    mv_accusatief: 'βασιλεῖς',
    mv_genitief: 'βασιλέων',
    mv_datief: 'βασιλεῦσιν',
    vocabularyAnswers: ['koning'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'γραμματεύς',
    ev_accusatief: 'γραμματέα',
    ev_genitief: 'γραμματέως',
    ev_datief: 'γραμματεῖ',
    mv_nominatief: 'γραμματεῖς',
    mv_accusatief: 'γραμματεῖς',
    mv_genitief: 'γραμματέων',
    mv_datief: 'γραμματεῦσιν',
    vocabularyAnswers: ['schriftgeleerde'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'ἱερεύς',
    ev_accusatief: 'ἱερέα',
    ev_genitief: 'ἱερέως',
    ev_datief: 'ἱερεῖ',
    mv_nominatief: 'ἱερεῖς',
    mv_accusatief: 'ἱερεῖς',
    mv_genitief: 'ἱερέων',
    mv_datief: 'ἱερεῦσιν',
    vocabularyAnswers: ['priester'],
    type: 'vervoeging-woordenschat'
  },
  {
    ev_nominatief: 'ἀρχιερεύς',
    ev_accusatief: 'ἀρχιερέα',
    ev_genitief: 'ἀρχιερέως',
    ev_datief: 'ἀρχιερεῖ',
    mv_nominatief: 'ἀρχιερεῖς',
    mv_accusatief: 'ἀρχιερεῖς',
    mv_genitief: 'ἀρχιερέων',
    mv_datief: 'ἀρχιερεῦσιν',
    vocabularyAnswers: ['hogepriester'],
    type: 'vervoeging-woordenschat'
  }
]

const lesson31ConjugationsWithVocabulary: LessonType = {
  id: 'lesson31-conjugations-with-vocabulary',
  name: 'Les 31 – Vervoegingen met woordenschat',
  type: 'vervoeging-woordenschat',
  active: false,
  questions
}

export default lesson31ConjugationsWithVocabulary
