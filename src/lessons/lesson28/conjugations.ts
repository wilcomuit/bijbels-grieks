const questions: Array<MixedQuestionType> = [
  {
    ev_nominatief: 'ἀνήρ',
    ev_accusatief: 'ἀνδρα',
    ev_genitief: 'ἀνδρός',
    ev_datief: 'ἀνδρι',
    mv_nominatief: 'ἀνδρες',
    mv_accusatief: 'ἀνδρας',
    mv_genitief: 'ἀνδρων',
    mv_datief: 'ἀνδράσιν',
    vocabularyAnswers: ['man', 'echtgenoot'],
    type: 'vervoeging-woordenschat'
  }
]

const lesson28Conjugations: LessonType = {
  id: 'lesson28-conjugations',
  name: 'Les 28 – Vervoegingen met woordenschat (WIP)',
  type: 'vervoeging-woordenschat',
  active: false,
  questions
}
export default lesson28Conjugations
