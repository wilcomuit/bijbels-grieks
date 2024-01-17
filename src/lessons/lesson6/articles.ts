const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ὁ',
    ev_accusatief: 'τόν',
    ev_genitief: 'τοῦ',
    ev_datief: 'τῷ',
    mv_nominatief: 'οἱ',
    mv_accusatief: 'τούς',
    mv_genitief: 'τῶν',
    mv_datief: 'τοῖς',
    type: 'vervoeging'
  }
]
const lesson6Articles: LessonType = {
  id: 'lesson6-articles',
  name: 'Les 6 – Mannelijke lidwoorden',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson6Articles
