const questions: Array<ConjugationQuestionType> = [
    {
      ev_nominatief: "ἡ",
      ev_accusatief: "τήν",
      ev_genitief: "τῆς",
      ev_datief: "τῇ",
      mv_nominatief: "αἱ",
      mv_accusatief: "τάς",
      mv_genitief: "τῶν",
      mv_datief: "ταῖς",
      type: "vervoeging"
    }
]
const lesson8Articles: LessonType = {
  id: 'lesson8-articles',
  name: 'Les 8 – Vrouwelijke lidwoorden',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson8Articles