const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ὅς',
    ev_accusatief: 'ὅν',
    ev_genitief: 'οὗ',
    ev_datief: 'ᾧ',
    mv_nominatief: 'οἵ',
    mv_accusatief: 'οὕς',
    mv_genitief: 'ὧν',
    mv_datief: 'οἷς',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἥ',
    ev_accusatief: 'ἥν',
    ev_genitief: 'ἧς',
    ev_datief: 'ᾗ',
    mv_nominatief: 'αἵ',
    mv_accusatief: 'ἅς',
    mv_genitief: 'ὧν',
    mv_datief: 'αἷς',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὅ',
    ev_accusatief: 'ὅ',
    ev_genitief: 'οὗ',
    ev_datief: 'ᾧ',
    mv_nominatief: 'ἅ',
    mv_accusatief: 'ἅ',
    mv_genitief: 'ὧν',
    mv_datief: 'οἷς',
    type: 'vervoeging'
  }
]
const lesson18Conjugations: LessonType = {
  id: 'lesson18-conjugations',
  name: 'Les 18 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson18Conjugations
