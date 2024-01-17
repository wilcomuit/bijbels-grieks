const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ἀργύριον',
    ev_accusatief: 'ἀργύριον',
    ev_genitief: 'ἀργύριου',
    ev_datief: 'ἀργύριῳ',
    mv_nominatief: 'ἀργύρια',
    mv_accusatief: 'ἀργύρια',
    mv_genitief: 'ἀργύριων',
    mv_datief: 'ἀργύριοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'βιβλίον',
    ev_accusatief: 'βιβλίον',
    ev_genitief: 'βιβλίου',
    ev_datief: 'βιβλίῳ',
    mv_nominatief: 'βιβλία',
    mv_accusatief: 'βιβλία',
    mv_genitief: 'βιβλίων',
    mv_datief: 'βιβλίοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'δαιμόνιον',
    ev_accusatief: 'δαιμόνιον',
    ev_genitief: 'δαιμόνιου',
    ev_datief: 'δαιμόνιῳ',
    mv_nominatief: 'δαιμόνια',
    mv_accusatief: 'δαιμόνια',
    mv_genitief: 'δαιμόνιων',
    mv_datief: 'δαιμόνιοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'δένδρον',
    ev_accusatief: 'δένδρον',
    ev_genitief: 'δένδρου',
    ev_datief: 'δένδρῳ',
    mv_nominatief: 'δένδρα',
    mv_accusatief: 'δένδρα',
    mv_genitief: 'δένδρων',
    mv_datief: 'δένδροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἔργον',
    ev_accusatief: 'ἔργον',
    ev_genitief: 'ἔργου',
    ev_datief: 'ἔργῳ',
    mv_nominatief: 'ἔργα',
    mv_accusatief: 'ἔργα',
    mv_genitief: 'ἔργων',
    mv_datief: 'ἔργοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'εὐαγγέλιον',
    ev_accusatief: 'εὐαγγέλιον',
    ev_genitief: 'εὐαγγέλιου',
    ev_datief: 'εὐαγγέλιῳ',
    mv_nominatief: 'εὐαγγέλια',
    mv_accusatief: 'εὐαγγέλια',
    mv_genitief: 'εὐαγγέλιων',
    mv_datief: 'εὐαγγέλιοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἱερόν',
    ev_accusatief: 'ἱερον',
    ev_genitief: 'ἱερου',
    ev_datief: 'ἱερῳ',
    mv_nominatief: 'ἱερα',
    mv_accusatief: 'ἱερα',
    mv_genitief: 'ἱερων',
    mv_datief: 'ἱεροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἱμάτιον',
    ev_accusatief: 'ἱμάτιον',
    ev_genitief: 'ἱμάτιου',
    ev_datief: 'ἱμάτιῳ',
    mv_nominatief: 'ἱμάτια',
    mv_accusatief: 'ἱμάτια',
    mv_genitief: 'ἱμάτιων',
    mv_datief: 'ἱμάτιοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μνημεῖον',
    ev_accusatief: 'μνημεῖον',
    ev_genitief: 'μνημεῖου',
    ev_datief: 'μνημεῖῳ',
    mv_nominatief: 'μνημεῖα',
    mv_accusatief: 'μνημεῖα',
    mv_genitief: 'μνημεῖων',
    mv_datief: 'μνημεῖοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μυστήριον',
    ev_accusatief: 'μυστήριον',
    ev_genitief: 'μυστήριου',
    ev_datief: 'μυστήριῳ',
    mv_nominatief: 'μυστήρια',
    mv_accusatief: 'μυστήρια',
    mv_genitief: 'μυστήριων',
    mv_datief: 'μυστήριοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'παιδίον',
    ev_accusatief: 'παιδίον',
    ev_genitief: 'παιδίου',
    ev_datief: 'παιδίῳ',
    mv_nominatief: 'παιδία',
    mv_accusatief: 'παιδία',
    mv_genitief: 'παιδίων',
    mv_datief: 'παιδίοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τέκνον',
    ev_accusatief: 'τέκνον',
    ev_genitief: 'τέκνου',
    ev_datief: 'τέκνῳ',
    mv_nominatief: 'τέκνα',
    mv_accusatief: 'τέκνα',
    mv_genitief: 'τέκνων',
    mv_datief: 'τέκνοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πλοῖον',
    ev_accusatief: 'πλοῖον',
    ev_genitief: 'πλοῖου',
    ev_datief: 'πλοῖῳ',
    mv_nominatief: 'πλοῖα',
    mv_accusatief: 'πλοῖα',
    mv_genitief: 'πλοῖων',
    mv_datief: 'πλοῖοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ποτήριον',
    ev_accusatief: 'ποτήριον',
    ev_genitief: 'ποτήριου',
    ev_datief: 'ποτήριῳ',
    mv_nominatief: 'ποτήρια',
    mv_accusatief: 'ποτήρια',
    mv_genitief: 'ποτήριων',
    mv_datief: 'ποτήριοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πρόβατον',
    ev_accusatief: 'πρόβατον',
    ev_genitief: 'πρόβατου',
    ev_datief: 'πρόβατῳ',
    mv_nominatief: 'πρόβατα',
    mv_accusatief: 'πρόβατα',
    mv_genitief: 'πρόβατων',
    mv_datief: 'πρόβατοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πρόσωπον',
    ev_accusatief: 'πρόσωπον',
    ev_genitief: 'πρόσωπου',
    ev_datief: 'πρόσωπῳ',
    mv_nominatief: 'πρόσωπα',
    mv_accusatief: 'πρόσωπα',
    mv_genitief: 'πρόσωπων',
    mv_datief: 'πρόσωποις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σημεῖον',
    ev_accusatief: 'σημεῖον',
    ev_genitief: 'σημεῖου',
    ev_datief: 'σημεῖῳ',
    mv_nominatief: 'σημεῖα',
    mv_accusatief: 'σημεῖα',
    mv_genitief: 'σημεῖων',
    mv_datief: 'σημεῖοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'συνέδριον',
    ev_accusatief: 'συνέδριον',
    ev_genitief: 'συνέδριου',
    ev_datief: 'συνέδριῳ',
    mv_nominatief: 'συνέδρια',
    mv_accusatief: 'συνέδρια',
    mv_genitief: 'συνέδριων',
    mv_datief: 'συνέδριοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σάββατον',
    ev_accusatief: 'σάββατον',
    ev_genitief: 'σάββατου',
    ev_datief: 'σάββατῳ',
    mv_nominatief: 'σάββατα',
    mv_accusatief: 'σάββατα',
    mv_genitief: 'σάββατων',
    mv_datief: 'σάββατοις',
    type: 'vervoeging'
  }
]
const lesson7Conjugations: LessonType = {
  id: 'lesson7-conjugations',
  name: 'Les 7 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson7Conjugations
