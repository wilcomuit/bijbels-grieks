const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'το',
    ev_accusatief: 'τό',
    ev_genitief: 'τοῦ',
    ev_datief: 'τῷ',
    mv_nominatief: 'τά',
    mv_accusatief: 'τά',
    mv_genitief: 'τῶν',
    mv_datief: 'τοῖς',
    type: 'vervoeging'
  }
]
const lesson7Articles: LessonType = {
  id: 'lesson7-articles',
  name: 'Les 7 – Onzijdige lidwoorden',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson7Articles
