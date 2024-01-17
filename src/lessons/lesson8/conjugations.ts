const questions: Array<ConjugationQuestionType> = [
  {
    ev_nominatief: 'ἀγάπη',
    ev_accusatief: 'ἀγάπη',
    ev_genitief: 'ἀγάπης',
    ev_datief: 'ἀγάπῃ',
    mv_nominatief: 'ἀγάπαι',
    mv_accusatief: 'ἀγάπας',
    mv_genitief: 'ἀγάπων',
    mv_datief: 'ἀγάπαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀρχη',
    ev_accusatief: 'ἀρχη',
    ev_genitief: 'ἀρχης',
    ev_datief: 'ἀρχῃ',
    mv_nominatief: 'ἀρχαι',
    mv_accusatief: 'ἀρχας',
    mv_genitief: 'ἀρχων',
    mv_datief: 'ἀρχαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γη',
    ev_accusatief: 'γη',
    ev_genitief: 'γης',
    ev_datief: 'γῃ',
    mv_nominatief: 'γαι',
    mv_accusatief: 'γας',
    mv_genitief: 'γων',
    mv_datief: 'γαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γραφη',
    ev_accusatief: 'γραφη',
    ev_genitief: 'γραφης',
    ev_datief: 'γραφῃ',
    mv_nominatief: 'γραφαι',
    mv_accusatief: 'γραφας',
    mv_genitief: 'γραφων',
    mv_datief: 'γραφαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'διαθήκη',
    ev_accusatief: 'διαθήκη',
    ev_genitief: 'διαθήκης',
    ev_datief: 'διαθήκῃ',
    mv_nominatief: 'διαθήκαι',
    mv_accusatief: 'διαθήκας',
    mv_genitief: 'διαθήκων',
    mv_datief: 'διαθήκαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'διδαχη',
    ev_accusatief: 'διδαχη',
    ev_genitief: 'διδαχης',
    ev_datief: 'διδαχῃ',
    mv_nominatief: 'διδαχαι',
    mv_accusatief: 'διδαχας',
    mv_genitief: 'διδαχων',
    mv_datief: 'διδαχαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'δικαιοσύνη',
    ev_accusatief: 'δικαιοσύνη',
    ev_genitief: 'δικαιοσύνης',
    ev_datief: 'δικαιοσύνῃ',
    mv_nominatief: 'δικαιοσύναι',
    mv_accusatief: 'δικαιοσύνας',
    mv_genitief: 'δικαιοσύνων',
    mv_datief: 'δικαιοσύναις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'εἰρήνη',
    ev_accusatief: 'εἰρήνη',
    ev_genitief: 'εἰρήνης',
    ev_datief: 'εἰρήνῃ',
    mv_nominatief: 'εἰρήναι',
    mv_accusatief: 'εἰρήνας',
    mv_genitief: 'εἰρήνων',
    mv_datief: 'εἰρήναις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐντολη',
    ev_accusatief: 'ἐντολη',
    ev_genitief: 'ἐντολης',
    ev_datief: 'ἐντολῃ',
    mv_nominatief: 'ἐντολαι',
    mv_accusatief: 'ἐντολας',
    mv_genitief: 'ἐντολων',
    mv_datief: 'ἐντολαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐπιστολη',
    ev_accusatief: 'ἐπιστολη',
    ev_genitief: 'ἐπιστολης',
    ev_datief: 'ἐπιστολῃ',
    mv_nominatief: 'ἐπιστολαι',
    mv_accusatief: 'ἐπιστολας',
    mv_genitief: 'ἐπιστολων',
    mv_datief: 'ἐπιστολαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ζωη',
    ev_accusatief: 'ζωη',
    ev_genitief: 'ζωης',
    ev_datief: 'ζωῃ',
    mv_nominatief: 'ζωαι',
    mv_accusatief: 'ζωας',
    mv_genitief: 'ζωων',
    mv_datief: 'ζωαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'κεφαλη',
    ev_accusatief: 'κεφαλη',
    ev_genitief: 'κεφαλης',
    ev_datief: 'κεφαλῃ',
    mv_nominatief: 'κεφαλαι',
    mv_accusatief: 'κεφαλας',
    mv_genitief: 'κεφαλων',
    mv_datief: 'κεφαλαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'κώμη',
    ev_accusatief: 'κώμη',
    ev_genitief: 'κώμης',
    ev_datief: 'κώμῃ',
    mv_nominatief: 'κώμαι',
    mv_accusatief: 'κώμας',
    mv_genitief: 'κώμων',
    mv_datief: 'κώμαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'νεφέλη',
    ev_accusatief: 'νεφέλη',
    ev_genitief: 'νεφέλης',
    ev_datief: 'νεφέλῃ',
    mv_nominatief: 'νεφέλαι',
    mv_accusatief: 'νεφέλας',
    mv_genitief: 'νεφέλων',
    mv_datief: 'νεφέλαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὀργη',
    ev_accusatief: 'ὀργη',
    ev_genitief: 'ὀργης',
    ev_datief: 'ὀργῃ',
    mv_nominatief: 'ὀργαι',
    mv_accusatief: 'ὀργας',
    mv_genitief: 'ὀργων',
    mv_datief: 'ὀργαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'παραβολη',
    ev_accusatief: 'παραβολη',
    ev_genitief: 'παραβολης',
    ev_datief: 'παραβολῃ',
    mv_nominatief: 'παραβολαι',
    mv_accusatief: 'παραβολας',
    mv_genitief: 'παραβολων',
    mv_datief: 'παραβολαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'προσευχη',
    ev_accusatief: 'προσευχη',
    ev_genitief: 'προσευχης',
    ev_datief: 'προσευχῃ',
    mv_nominatief: 'προσευχαι',
    mv_accusatief: 'προσευχας',
    mv_genitief: 'προσευχων',
    mv_datief: 'προσευχαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'συναγωγη',
    ev_accusatief: 'συναγωγη',
    ev_genitief: 'συναγωγης',
    ev_datief: 'συναγωγῃ',
    mv_nominatief: 'συναγωγαι',
    mv_accusatief: 'συναγωγας',
    mv_genitief: 'συναγωγων',
    mv_datief: 'συναγωγαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τιμη',
    ev_accusatief: 'τιμη',
    ev_genitief: 'τιμης',
    ev_datief: 'τιμῃ',
    mv_nominatief: 'τιμαι',
    mv_accusatief: 'τιμας',
    mv_genitief: 'τιμων',
    mv_datief: 'τιμαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὑπομονη',
    ev_accusatief: 'ὑπομονη',
    ev_genitief: 'ὑπομονης',
    ev_datief: 'ὑπομονῃ',
    mv_nominatief: 'ὑπομοναι',
    mv_accusatief: 'ὑπομονας',
    mv_genitief: 'ὑπομονων',
    mv_datief: 'ὑπομοναις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'φυλακη',
    ev_accusatief: 'φυλακη',
    ev_genitief: 'φυλακης',
    ev_datief: 'φυλακῃ',
    mv_nominatief: 'φυλακαι',
    mv_accusatief: 'φυλακας',
    mv_genitief: 'φυλακων',
    mv_datief: 'φυλακαις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'φωνη',
    ev_accusatief: 'φωνη',
    ev_genitief: 'φωνης',
    ev_datief: 'φωνῃ',
    mv_nominatief: 'φωναι',
    mv_accusatief: 'φωνας',
    mv_genitief: 'φωνων',
    mv_datief: 'φωναις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ψυχη',
    ev_accusatief: 'ψυχη',
    ev_genitief: 'ψυχης',
    ev_datief: 'ψυχῃ',
    mv_nominatief: 'ψυχαι',
    mv_accusatief: 'ψυχας',
    mv_genitief: 'ψυχων',
    mv_datief: 'ψυχαις',
    type: 'vervoeging'
  }
]
const lesson8Conjugations: LessonType = {
  id: 'lesson8-conjugations',
  name: 'Les 8 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson8Conjugations
