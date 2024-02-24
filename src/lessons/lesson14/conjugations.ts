const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ἐκεῖνος',
    ev_accusatief: 'ἐκεῖνον',
    ev_genitief: 'ἐκεῖνου',
    ev_datief: 'ἐκεῖνῳ',
    mv_nominatief: 'ἐκεῖνοι',
    mv_accusatief: 'ἐκεῖνους',
    mv_genitief: 'ἐκεῖνων',
    mv_datief: 'ἐκεῖνοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐκεῖνη',
    ev_accusatief: 'ἐκεῖνην',
    ev_genitief: 'ἐκεῖνης',
    ev_datief: 'ἐκεῖνῃ',
    mv_nominatief: 'ἐκεῖναι',
    mv_accusatief: 'ἐκεῖνας',
    mv_genitief: 'ἐκεῖνων',
    mv_datief: 'ἐκεῖναις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐκεῖνο',
    ev_accusatief: 'ἐκεῖνο',
    ev_genitief: 'ἐκεῖνου',
    ev_datief: 'ἐκεῖνῳ',
    mv_nominatief: 'ἐκεῖνα',
    mv_accusatief: 'ἐκεῖνα',
    mv_genitief: 'ἐκεῖνων',
    mv_datief: 'ἐκεῖνοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'οὗτος',
    ev_accusatief: 'τοῦτον',
    ev_genitief: 'τούτου',
    ev_datief: 'τούτῳ',
    mv_nominatief: 'οὗτοι',
    mv_accusatief: 'τούτους',
    mv_genitief: 'τούτων',
    mv_datief: 'τούτοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'αὕτη',
    ev_accusatief: 'ταύτην',
    ev_genitief: 'ταύτης',
    ev_datief: 'ταύτῃ',
    mv_nominatief: 'αὗται',
    mv_accusatief: 'ταύτας',
    mv_genitief: 'τούτων',
    mv_datief: 'ταύταις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τοῦτο',
    ev_accusatief: 'τοῦτο',
    ev_genitief: 'τούτου',
    ev_datief: 'τούτῳ',
    mv_nominatief: 'ταῦτα',
    mv_accusatief: 'ταῦτα',
    mv_genitief: 'τούτων',
    mv_datief: 'τούτοις',
    type: 'vervoeging'
  }
]
const lesson14Conjugations: LessonType = {
  id: 'lesson14-conjugations',
  name: 'Les 14 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson14Conjugations
