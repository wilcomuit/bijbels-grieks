const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'αὐτός',
    ev_accusatief: 'αὐτόν',
    ev_genitief: 'αὐτοῦ',
    ev_datief: 'αὐτῷ',
    mv_nominatief: 'αὐτοί',
    mv_accusatief: 'αὐτούς',
    mv_genitief: 'αὐτῶν',
    mv_datief: 'αὐτοῖς',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'αὐτή',
    ev_accusatief: 'αὐτήν',
    ev_genitief: 'αὐτῆς',
    ev_datief: 'αὐτῇ',
    mv_nominatief: 'αὐταί',
    mv_accusatief: 'αὐτάς',
    mv_genitief: 'αὐτῶν',
    mv_datief: 'αὐταῖς',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'αὐτά',
    ev_accusatief: 'αὐτά',
    ev_genitief: 'αὐτοῦ',
    ev_datief: 'αὐτῷ',
    mv_nominatief: 'αὐτά',
    mv_accusatief: 'αὐτά',
    mv_genitief: 'αὐτῶν',
    mv_datief: 'αὐτοῖς',
    type: 'vervoeging'
  },
  {
    ev_accusatief: 'ἑαυτόν',
    ev_genitief: 'ἑαυτοῦ',
    ev_datief: 'ἑαυτῷ',
    mv_accusatief: 'ἑαυτούς',
    mv_genitief: 'ἑαυτῶν',
    mv_datief: 'ἑαυτοῖς',
    type: 'vervoeging'
  },
  {
    ev_accusatief: 'ἑαυτήν',
    ev_genitief: 'ἑαυτῆς',
    ev_datief: 'ἑαυτῇ',
    mv_accusatief: 'ἑαυτάς',
    mv_genitief: 'ἑαυτῶν',
    mv_datief: 'ἑαυταῖς',
    type: 'vervoeging'
  },
  {
    ev_accusatief: 'ἑαυτό',
    ev_genitief: 'ἑαυτοῦ',
    ev_datief: 'ἑαυτῷ',
    mv_accusatief: 'ἑαυτά',
    mv_genitief: 'ἑαυτῶν',
    mv_datief: 'ἑαυτοῖς',
    type: 'vervoeging'
  }
  ,
  {
    mv_accusatief: 'ἀλλήλους',
    mv_genitief: 'ἀλλήλων',
    mv_datief: 'ἀλλήλοις',
    type: 'vervoeging'
  }
]
const lesson15Conjugations: LessonType = {
  id: 'lesson15-conjugations',
  name: 'Les 15 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson15Conjugations
