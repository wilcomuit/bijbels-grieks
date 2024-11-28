const questions: Array<MixedQuestionType> = [
  {
    ev_nominatief: 'αἷμα',
    ev_accusatief: 'αἷμα',
    ev_genitief: 'αἷματος',
    ev_datief: 'αἷματι',
    mv_nominatief: 'αἷματα',
    mv_accusatief: 'αἷματα',
    mv_genitief: 'αἷματων',
    mv_datief: 'αἷμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'βάπτισμα',
    ev_accusatief: 'βάπτισμα',
    ev_genitief: 'βάπτισματος',
    ev_datief: 'βάπτισματι',
    mv_nominatief: 'βάπτισματα',
    mv_accusatief: 'βάπτισματα',
    mv_genitief: 'βάπτισματων',
    mv_datief: 'βάπτισμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θέλημα',
    ev_accusatief: 'θέλημα',
    ev_genitief: 'θέληματος',
    ev_datief: 'θέληματι',
    mv_nominatief: 'θέληματα',
    mv_accusatief: 'θέληματα',
    mv_genitief: 'θέληματων',
    mv_datief: 'θέλημασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'κρῖμα',
    ev_accusatief: 'κρῖμα',
    ev_genitief: 'κρῖματος',
    ev_datief: 'κρῖματι',
    mv_nominatief: 'κρῖματα',
    mv_accusatief: 'κρῖματα',
    mv_genitief: 'κρῖματων',
    mv_datief: 'κρῖμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὄνομα',
    ev_accusatief: 'ὄνομα',
    ev_genitief: 'ὄνοματος',
    ev_datief: 'ὄνοματι',
    mv_nominatief: 'ὄνοματα',
    mv_accusatief: 'ὄνοματα',
    mv_genitief: 'ὄνοματων',
    mv_datief: 'ὄνομασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πνεῦμα',
    ev_accusatief: 'πνεῦμα',
    ev_genitief: 'πνεῦματος',
    ev_datief: 'πνεῦματι',
    mv_nominatief: 'πνεῦματα',
    mv_accusatief: 'πνεῦματα',
    mv_genitief: 'πνεῦματων',
    mv_datief: 'πνεῦμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ῥῆμα',
    ev_accusatief: 'ῥῆμα',
    ev_genitief: 'ῥῆματος',
    ev_datief: 'ῥῆματι',
    mv_nominatief: 'ῥῆματα',
    mv_accusatief: 'ῥῆματα',
    mv_genitief: 'ῥῆματων',
    mv_datief: 'ῥῆμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σπέρμα',
    ev_accusatief: 'σπέρμα',
    ev_genitief: 'σπέρματος',
    ev_datief: 'σπέρματι',
    mv_nominatief: 'σπέρματα',
    mv_accusatief: 'σπέρματα',
    mv_genitief: 'σπέρματων',
    mv_datief: 'σπέρμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'στόμα',
    ev_accusatief: 'στόμα',
    ev_genitief: 'στόματος',
    ev_datief: 'στόματι',
    mv_nominatief: 'στόματα',
    mv_accusatief: 'στόματα',
    mv_genitief: 'στόματων',
    mv_datief: 'στόμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σῶμα',
    ev_accusatief: 'σῶμα',
    ev_genitief: 'σῶματος',
    ev_datief: 'σῶματι',
    mv_nominatief: 'σῶματα',
    mv_accusatief: 'σῶματα',
    mv_genitief: 'σῶματων',
    mv_datief: 'σῶμασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'οὖς',
    ev_accusatief: 'οὖς',
    ev_genitief: 'ὠτός',
    ev_datief: 'ὠτί',
    mv_nominatief: 'ὦτα',
    mv_accusatief: 'ὦτα',
    mv_genitief: 'ὤτων',
    mv_datief: 'ὠσίν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πῦρ',
    ev_accusatief: 'πῦρ',
    ev_genitief: 'πυρός',
    ev_datief: 'πυρί',
    mv_nominatief: 'πυρα',
    mv_accusatief: 'πυρα',
    mv_genitief: 'πυρων',
    mv_datief: 'πυρσίν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τέρας',
    ev_accusatief: 'τέρας',
    ev_genitief: 'τέρατος',
    ev_datief: 'τέρατί',
    mv_nominatief: 'τέρατα',
    mv_accusatief: 'τέρατα',
    mv_genitief: 'τέρατων',
    mv_datief: 'τέρασίν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὕδωρ',
    ev_accusatief: 'ὕδωρ',
    ev_genitief: 'ὕδατος',
    ev_datief: 'ὕδατί',
    mv_nominatief: 'ὕδατα',
    mv_accusatief: 'ὕδατα',
    mv_genitief: 'ὕδατων',
    mv_datief: 'ὕδασιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'φῶς',
    ev_accusatief: 'φῶς',
    ev_genitief: 'φωτός',
    ev_datief: 'φωτί',
    mv_nominatief: 'φωτα',
    mv_accusatief: 'φωτα',
    mv_genitief: 'φωτων',
    mv_datief: 'φωσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γένος',
    ev_accusatief: 'γένος',
    ev_genitief: 'γένους',
    ev_datief: 'γένει',
    mv_nominatief: 'γένη',
    mv_accusatief: 'γένη',
    mv_genitief: 'γένῶν',
    mv_datief: 'γένεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἔθνος',
    ev_accusatief: 'ἔθνος',
    ev_genitief: 'ἔθνους',
    ev_datief: 'ἔθνει',
    mv_nominatief: 'ἔθνη',
    mv_accusatief: 'ἔθνη',
    mv_genitief: 'ἔθνῶν',
    mv_datief: 'ἔθνεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἔλεος',
    ev_accusatief: 'ἔλεος',
    ev_genitief: 'ἔλεους',
    ev_datief: 'ἔλεει',
    mv_nominatief: 'ἔλεη',
    mv_accusatief: 'ἔλεη',
    mv_genitief: 'ἔλεῶν',
    mv_datief: 'ἔλεεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἔτος',
    ev_accusatief: 'ἔτος',
    ev_genitief: 'ἔτους',
    ev_datief: 'ἔτει',
    mv_nominatief: 'ἔτη',
    mv_accusatief: 'ἔτη',
    mv_genitief: 'ἔτῶν',
    mv_datief: 'ἔτεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μέλος',
    ev_accusatief: 'μέλος',
    ev_genitief: 'μέλους',
    ev_datief: 'μέλει',
    mv_nominatief: 'μέλη',
    mv_accusatief: 'μέλη',
    mv_genitief: 'μέλῶν',
    mv_datief: 'μέλεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μέρος',
    ev_accusatief: 'μέρος',
    ev_genitief: 'μέρους',
    ev_datief: 'μέρει',
    mv_nominatief: 'μέρη',
    mv_accusatief: 'μέρη',
    mv_genitief: 'μέρῶν',
    mv_datief: 'μέρεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὄρος',
    ev_accusatief: 'ὄρος',
    ev_genitief: 'ὄρους',
    ev_datief: 'ὄρει',
    mv_nominatief: 'ὄρη',
    mv_accusatief: 'ὄρη',
    mv_genitief: 'ὄρῶν',
    mv_datief: 'ὄρεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πλῆθος',
    ev_accusatief: 'πλῆθος',
    ev_genitief: 'πλῆθους',
    ev_datief: 'πλῆθει',
    mv_nominatief: 'πλῆθη',
    mv_accusatief: 'πλῆθη',
    mv_genitief: 'πλῆθῶν',
    mv_datief: 'πλῆθεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σκεῦος',
    ev_accusatief: 'σκεῦος',
    ev_genitief: 'σκεῦους',
    ev_datief: 'σκεῦει',
    mv_nominatief: 'σκεῦη',
    mv_accusatief: 'σκεῦη',
    mv_genitief: 'σκεῦῶν',
    mv_datief: 'σκεῦεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σκότος',
    ev_accusatief: 'σκότος',
    ev_genitief: 'σκότους',
    ev_datief: 'σκότει',
    mv_nominatief: 'σκότη',
    mv_accusatief: 'σκότη',
    mv_genitief: 'σκότῶν',
    mv_datief: 'σκότεσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τέλος',
    ev_accusatief: 'τέλος',
    ev_genitief: 'τέλους',
    ev_datief: 'τέλει',
    mv_nominatief: 'τέλη',
    mv_accusatief: 'τέλη',
    mv_genitief: 'τέλῶν',
    mv_datief: 'τέλεσιν',
    type: 'vervoeging'
  }
]

const lesson29Conjugations: LessonType = {
  id: 'lesson29-conjugations',
  name: 'Les 29 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson29Conjugations
