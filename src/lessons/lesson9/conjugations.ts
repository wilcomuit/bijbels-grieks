const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ἀδικία',
    ev_accusatief: 'ἀδικίαν',
    ev_genitief: 'ἀδικίας',
    ev_datief: 'ἀδικίᾳ',
    mv_nominatief: 'ἀδικίαι',
    mv_accusatief: 'ἀδικίας',
    mv_genitief: 'ἀδικίων',
    mv_datief: 'ἀδικίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀλήθεια',
    ev_accusatief: 'ἀλήθειαν',
    ev_genitief: 'ἀλήθειας',
    ev_datief: 'ἀλήθειᾳ',
    mv_nominatief: 'ἀλήθειαι',
    mv_accusatief: 'ἀλήθειας',
    mv_genitief: 'ἀλήθειων',
    mv_datief: 'ἀλήθειαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἁμαρτία',
    ev_accusatief: 'ἁμαρτίαν',
    ev_genitief: 'ἁμαρτίας',
    ev_datief: 'ἁμαρτίᾳ',
    mv_nominatief: 'ἁμαρτίαι',
    mv_accusatief: 'ἁμαρτίας',
    mv_genitief: 'ἁμαρτίων',
    mv_datief: 'ἁμαρτίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'βασιλεία',
    ev_accusatief: 'βασιλείαν',
    ev_genitief: 'βασιλείας',
    ev_datief: 'βασιλείᾳ',
    mv_nominatief: 'βασιλείαι',
    mv_accusatief: 'βασιλείας',
    mv_genitief: 'βασιλείων',
    mv_datief: 'βασιλείαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γενεά',
    ev_accusatief: 'γενεαν',
    ev_genitief: 'γενεας',
    ev_datief: 'γενεᾳ',
    mv_nominatief: 'γενεαι',
    mv_accusatief: 'γενεας',
    mv_genitief: 'γενεων',
    mv_datief: 'γενεαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐκκλησία',
    ev_accusatief: 'ἐκκλησίαν',
    ev_genitief: 'ἐκκλησίας',
    ev_datief: 'ἐκκλησίᾳ',
    mv_nominatief: 'ἐκκλησίαι',
    mv_accusatief: 'ἐκκλησίας',
    mv_genitief: 'ἐκκλησίων',
    mv_datief: 'ἐκκλησίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐξουσία',
    ev_accusatief: 'ἐξουσίαν',
    ev_genitief: 'ἐξουσίας',
    ev_datief: 'ἐξουσίᾳ',
    mv_nominatief: 'ἐξουσίαι',
    mv_accusatief: 'ἐξουσίας',
    mv_genitief: 'ἐξουσίων',
    mv_datief: 'ἐξουσίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐπαγγελία',
    ev_accusatief: 'ἐπαγγελίαν',
    ev_genitief: 'ἐπαγγελίας',
    ev_datief: 'ἐπαγγελίᾳ',
    mv_nominatief: 'ἐπαγγελίαι',
    mv_accusatief: 'ἐπαγγελίας',
    mv_genitief: 'ἐπαγγελίων',
    mv_datief: 'ἐπαγγελίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἡμέρα',
    ev_accusatief: 'ἡμέραν',
    ev_genitief: 'ἡμέρας',
    ev_datief: 'ἡμέρᾳ',
    mv_nominatief: 'ἡμέραι',
    mv_accusatief: 'ἡμέρας',
    mv_genitief: 'ἡμέρων',
    mv_datief: 'ἡμέραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θύρα',
    ev_accusatief: 'θύραν',
    ev_genitief: 'θύρας',
    ev_datief: 'θύρᾳ',
    mv_nominatief: 'θύραι',
    mv_accusatief: 'θύρας',
    mv_genitief: 'θύρων',
    mv_datief: 'θύραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θυσία',
    ev_accusatief: 'θυσίαν',
    ev_genitief: 'θυσίας',
    ev_datief: 'θυσίᾳ',
    mv_nominatief: 'θυσίαι',
    mv_accusatief: 'θυσίας',
    mv_genitief: 'θυσίων',
    mv_datief: 'θυσίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'καρδια',
    ev_accusatief: 'καρδιαν',
    ev_genitief: 'καρδιας',
    ev_datief: 'καρδιᾳ',
    mv_nominatief: 'καρδιαι',
    mv_accusatief: 'καρδιας',
    mv_genitief: 'καρδιων',
    mv_datief: 'καρδιαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μαρτυρία',
    ev_accusatief: 'μαρτυρίαν',
    ev_genitief: 'μαρτυρίας',
    ev_datief: 'μαρτυρίᾳ',
    mv_nominatief: 'μαρτυρίαι',
    mv_accusatief: 'μαρτυρίας',
    mv_genitief: 'μαρτυρίων',
    mv_datief: 'μαρτυρίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μετάνοια',
    ev_accusatief: 'μετάνοιαν',
    ev_genitief: 'μετάνοιας',
    ev_datief: 'μετάνοιᾳ',
    mv_nominatief: 'μετάνοιαι',
    mv_accusatief: 'μετάνοιας',
    mv_genitief: 'μετάνοιων',
    mv_datief: 'μετάνοιαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'οἰκια',
    ev_accusatief: 'οἰκιαν',
    ev_genitief: 'οἰκιας',
    ev_datief: 'οἰκιᾳ',
    mv_nominatief: 'οἰκιαι',
    mv_accusatief: 'οἰκιας',
    mv_genitief: 'οἰκιων',
    mv_datief: 'οἰκιαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'παρουσία',
    ev_accusatief: 'παρουσίαν',
    ev_genitief: 'παρουσίας',
    ev_datief: 'παρουσίᾳ',
    mv_nominatief: 'παρουσίαι',
    mv_accusatief: 'παρουσίας',
    mv_genitief: 'παρουσίων',
    mv_datief: 'παρουσίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πέτρα',
    ev_accusatief: 'πέτραν',
    ev_genitief: 'πέτρας',
    ev_datief: 'πέτρᾳ',
    mv_nominatief: 'πέτραι',
    mv_accusatief: 'πέτρας',
    mv_genitief: 'πέτρων',
    mv_datief: 'πέτραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σοφία',
    ev_accusatief: 'σοφίαν',
    ev_genitief: 'σοφίας',
    ev_datief: 'σοφίᾳ',
    mv_nominatief: 'σοφίαι',
    mv_accusatief: 'σοφίας',
    mv_genitief: 'σοφίων',
    mv_datief: 'σοφίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σωτηρία',
    ev_accusatief: 'σωτηρίαν',
    ev_genitief: 'σωτηρίας',
    ev_datief: 'σωτηρίᾳ',
    mv_nominatief: 'σωτηρίαι',
    mv_accusatief: 'σωτηρίας',
    mv_genitief: 'σωτηρίων',
    mv_datief: 'σωτηρίαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'χαρά',
    ev_accusatief: 'χαραν',
    ev_genitief: 'χαρας',
    ev_datief: 'χαρᾳ',
    mv_nominatief: 'χαραι',
    mv_accusatief: 'χαρας',
    mv_genitief: 'χαρων',
    mv_datief: 'χαραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'χήρα',
    ev_accusatief: 'χήραν',
    ev_genitief: 'χήρας',
    ev_datief: 'χήρᾳ',
    mv_nominatief: 'χήραι',
    mv_accusatief: 'χήρας',
    mv_genitief: 'χήρων',
    mv_datief: 'χήραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'χρεία',
    ev_accusatief: 'χρείαν',
    ev_genitief: 'χρείας',
    ev_datief: 'χρείᾳ',
    mv_nominatief: 'χρείαι',
    mv_accusatief: 'χρείας',
    mv_genitief: 'χρείων',
    mv_datief: 'χρείαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὥρα',
    ev_accusatief: 'ὥραν',
    ev_genitief: 'ὥρας',
    ev_datief: 'ὥρᾳ',
    mv_nominatief: 'ὥραι',
    mv_accusatief: 'ὥρας',
    mv_genitief: 'ὥρων',
    mv_datief: 'ὥραις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Γαλιλαία',
    ev_accusatief: 'Γαλιλαίαν',
    ev_genitief: 'Γαλιλαίας',
    ev_datief: 'Γαλιλαίᾳ',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Ἰουδαία',
    ev_accusatief: 'Ἰουδαίαν',
    ev_genitief: 'Ἰουδαίας',
    ev_datief: 'Ἰουδαίᾳ',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γλῶσσα',
    ev_accusatief: 'γλῶσσαν',
    ev_genitief: 'γλῶσσης',
    ev_datief: 'γλῶσσῃ',
    mv_nominatief: 'γλῶσσαι',
    mv_accusatief: 'γλῶσσας',
    mv_genitief: 'γλῶσσων',
    mv_datief: 'γλῶσσαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'δόξα',
    ev_accusatief: 'δόξαν',
    ev_genitief: 'δόξης',
    ev_datief: 'δόξῃ',
    mv_nominatief: 'δόξαι',
    mv_accusatief: 'δόξας',
    mv_genitief: 'δόξων',
    mv_datief: 'δόξαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θάλασσα',
    ev_accusatief: 'θάλασσαν',
    ev_genitief: 'θάλασσης',
    ev_datief: 'θάλασσῃ',
    mv_nominatief: 'θάλασσαι',
    mv_accusatief: 'θάλασσας',
    mv_genitief: 'θάλασσων',
    mv_datief: 'θάλασσαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Παῦλος',
    ev_accusatief: 'Παῦλον',
    ev_genitief: 'Παῦλου',
    ev_datief: 'Παῦλῳ',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Πέτρος',
    ev_accusatief: 'Πέτρον',
    ev_genitief: 'Πέτρου',
    ev_datief: 'Πέτρῳ',
    type: 'vervoeging'
  }
]
const lesson9Conjugations: LessonType = {
  id: 'lesson9-conjugations',
  name: 'Les 9 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson9Conjugations
