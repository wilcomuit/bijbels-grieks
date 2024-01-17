const questions: Array<MixedQuestionType> = [
  {
    ev_nominatief: 'Ἰουδαῖος',
    ev_accusatief: 'Ἰουδαῖον',
    ev_genitief: 'Ἰουδαῖου',
    ev_datief: 'Ἰουδαῖῳ',
    mv_nominatief: 'Ἰουδαῖοι',
    mv_accusatief: 'Ἰουδαῖους',
    mv_genitief: 'Ἰουδαῖων',
    mv_datief: 'Ἰουδαῖοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Φαρισαῖος',
    ev_accusatief: 'Φαρισαῖον',
    ev_genitief: 'Φαρισαῖου',
    ev_datief: 'Φαρισαῖῳ',
    mv_nominatief: 'Φαρισαῖοι',
    mv_accusatief: 'Φαρισαῖους',
    mv_genitief: 'Φαρισαῖων',
    mv_datief: 'Φαρισαῖοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Χριστός',
    ev_accusatief: 'Χριστον',
    ev_genitief: 'Χριστου',
    ev_datief: 'Χριστῳ',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἄγγελος',
    ev_accusatief: 'ἄγγελον',
    ev_genitief: 'ἄγγελου',
    ev_datief: 'ἄγγελῳ',
    mv_nominatief: 'ἄγγελοι',
    mv_accusatief: 'ἄγγελους',
    mv_genitief: 'ἄγγελων',
    mv_datief: 'ἄγγελοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀγρός',
    ev_accusatief: 'ἀγρον',
    ev_genitief: 'ἀγρου',
    ev_datief: 'ἀγρῳ',
    mv_nominatief: 'ἀγροι',
    mv_accusatief: 'ἀγρους',
    mv_genitief: 'ἀγρων',
    mv_datief: 'ἀγροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀδελφός',
    ev_accusatief: 'ἀδελφον',
    ev_genitief: 'ἀδελφου',
    ev_datief: 'ἀδελφῳ',
    mv_nominatief: 'ἀδελφοι',
    mv_accusatief: 'ἀδελφους',
    mv_genitief: 'ἀδελφων',
    mv_datief: 'ἀδελφοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἄνθρωπος',
    ev_accusatief: 'ἄνθρωπον',
    ev_genitief: 'ἄνθρωπου',
    ev_datief: 'ἄνθρωπῳ',
    mv_nominatief: 'ἄνθρωποι',
    mv_accusatief: 'ἄνθρωπους',
    mv_genitief: 'ἄνθρωπων',
    mv_datief: 'ἄνθρωποις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀπόστολος',
    ev_accusatief: 'ἀπόστολον',
    ev_genitief: 'ἀπόστολου',
    ev_datief: 'ἀπόστολῳ',
    mv_nominatief: 'ἀπόστολοι',
    mv_accusatief: 'ἀπόστολους',
    mv_genitief: 'ἀπόστολων',
    mv_datief: 'ἀπόστολοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'διάκονος',
    ev_accusatief: 'διάκονον',
    ev_genitief: 'διάκονου',
    ev_datief: 'διάκονῳ',
    mv_nominatief: 'διάκονοι',
    mv_accusatief: 'διάκονους',
    mv_genitief: 'διάκονων',
    mv_datief: 'διάκονοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'διδάσκαλος',
    ev_accusatief: 'διδάσκαλον',
    ev_genitief: 'διδάσκαλου',
    ev_datief: 'διδάσκαλῳ',
    mv_nominatief: 'διδάσκαλοι',
    mv_accusatief: 'διδάσκαλους',
    mv_genitief: 'διδάσκαλων',
    mv_datief: 'διδάσκαλοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐχθρός',
    ev_accusatief: 'ἐχθρον',
    ev_genitief: 'ἐχθρου',
    ev_datief: 'ἐχθρῳ',
    mv_nominatief: 'ἐχθροι',
    mv_accusatief: 'ἐχθρους',
    mv_genitief: 'ἐχθρων',
    mv_datief: 'ἐχθροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θάνατος',
    ev_accusatief: 'θάνατον',
    ev_genitief: 'θάνατου',
    ev_datief: 'θάνατῳ',
    mv_nominatief: 'θάνατοι',
    mv_accusatief: 'θάνατους',
    mv_genitief: 'θάνατων',
    mv_datief: 'θάνατοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θρόνος',
    ev_accusatief: 'θρόνον',
    ev_genitief: 'θρόνου',
    ev_datief: 'θρόνῳ',
    mv_nominatief: 'θρόνοι',
    mv_accusatief: 'θρόνους',
    mv_genitief: 'θρόνων',
    mv_datief: 'θρόνοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'κόσμος',
    ev_accusatief: 'κόσμον',
    ev_genitief: 'κόσμου',
    ev_datief: 'κόσμῳ',
    mv_nominatief: 'κόσμοι',
    mv_accusatief: 'κόσμους',
    mv_genitief: 'κόσμων',
    mv_datief: 'κόσμοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'κύριος',
    ev_accusatief: 'κύριον',
    ev_genitief: 'κύριου',
    ev_datief: 'κύριῳ',
    mv_nominatief: 'κύριοι',
    mv_accusatief: 'κύριους',
    mv_genitief: 'κύριων',
    mv_datief: 'κύριοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'λαός',
    ev_accusatief: 'λαον',
    ev_genitief: 'λαου',
    ev_datief: 'λαῳ',
    mv_nominatief: 'λαοι',
    mv_accusatief: 'λαους',
    mv_genitief: 'λαων',
    mv_datief: 'λαοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'λεπρός',
    ev_accusatief: 'λεπρον',
    ev_genitief: 'λεπρου',
    ev_datief: 'λεπρῳ',
    mv_nominatief: 'λεπροι',
    mv_accusatief: 'λεπρους',
    mv_genitief: 'λεπρων',
    mv_datief: 'λεπροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'λίθος',
    ev_accusatief: 'λίθον',
    ev_genitief: 'λίθου',
    ev_datief: 'λίθῳ',
    mv_nominatief: 'λίθοι',
    mv_accusatief: 'λίθους',
    mv_genitief: 'λίθων',
    mv_datief: 'λίθοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'λόγος',
    ev_accusatief: 'λόγον',
    ev_genitief: 'λόγου',
    ev_datief: 'λόγῳ',
    mv_nominatief: 'λόγοι',
    mv_accusatief: 'λόγους',
    mv_genitief: 'λόγων',
    mv_datief: 'λόγοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'νόμος',
    ev_accusatief: 'νόμον',
    ev_genitief: 'νόμου',
    ev_datief: 'νόμῳ',
    mv_nominatief: 'νόμοι',
    mv_accusatief: 'νόμους',
    mv_genitief: 'νόμων',
    mv_datief: 'νόμοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ὀφθαλμός',
    ev_accusatief: 'ὀφθαλμον',
    ev_genitief: 'ὀφθαλμου',
    ev_datief: 'ὀφθαλμῳ',
    mv_nominatief: 'ὀφθαλμοι',
    mv_accusatief: 'ὀφθαλμους',
    mv_genitief: 'ὀφθαλμων',
    mv_datief: 'ὀφθαλμοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'παραλυτικός',
    ev_accusatief: 'παραλυτικον',
    ev_genitief: 'παραλυτικου',
    ev_datief: 'παραλυτικῳ',
    mv_nominatief: 'παραλυτικοι',
    mv_accusatief: 'παραλυτικους',
    mv_genitief: 'παραλυτικων',
    mv_datief: 'παραλυτικοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ποταμός',
    ev_accusatief: 'ποταμον',
    ev_genitief: 'ποταμου',
    ev_datief: 'ποταμῳ',
    mv_nominatief: 'ποταμοι',
    mv_accusatief: 'ποταμους',
    mv_genitief: 'ποταμων',
    mv_datief: 'ποταμοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πρεσβύτερος',
    ev_accusatief: 'πρεσβύτερον',
    ev_genitief: 'πρεσβύτερου',
    ev_datief: 'πρεσβύτερῳ',
    mv_nominatief: 'πρεσβύτεροι',
    mv_accusatief: 'πρεσβύτερους',
    mv_genitief: 'πρεσβύτερων',
    mv_datief: 'πρεσβύτεροις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'τόπος',
    ev_accusatief: 'τόπον',
    ev_genitief: 'τόπου',
    ev_datief: 'τόπῳ',
    mv_nominatief: 'τόποι',
    mv_accusatief: 'τόπους',
    mv_genitief: 'τόπων',
    mv_datief: 'τόποις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'φιλος',
    ev_accusatief: 'φιλον',
    ev_genitief: 'φιλου',
    ev_datief: 'φιλῳ',
    mv_nominatief: 'φιλοι',
    mv_accusatief: 'φιλους',
    mv_genitief: 'φιλων',
    mv_datief: 'φιλοις',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'φόβος',
    ev_accusatief: 'φόβον',
    ev_genitief: 'φόβου',
    ev_datief: 'φόβῳ',
    mv_nominatief: 'φόβοι',
    mv_accusatief: 'φόβους',
    mv_genitief: 'φόβων',
    mv_datief: 'φόβοις',
    type: 'vervoeging'
  },
  {
    question: 'ὦ',
    answers: ['o!', 'o'],
    type: 'woordenschat'
  },
  {
    question: 'καí',
    answers: ['en', 'zelfs', 'ook'],
    explanation: '(soms: zelfs, ook)',
    type: 'woordenschat'
  },
  {
    question: 'Ἰσραήλ',
    answers: ['Israël', 'Israel'],
    explanation: '(mannelijk voornaamwoord, kan niet verbogen worden)',
    type: 'woordenschat'
  },
  {
    question: 'Ἰουδαῖος',
    answers: ['Jood'],
    explanation: '(lid van de stam van Juda)',
    type: 'woordenschat'
  },
  {
    question: 'Φαρισαῖος',
    answers: ['Farizeeër', 'Farizeeer'],
    type: 'woordenschat'
  },
  {
    question: 'Χριστός',
    answers: ['Christus'],
    explanation: '(Hebreeuws: Messias, d.i. de gezalfde)',
    type: 'woordenschat'
  },
  {
    question: 'ἄγγελος',
    answers: ['engel', 'bode'],
    type: 'woordenschat'
  },
  {
    question: 'ἀγρός',
    answers: ['veld'],
    explanation: '(agrarisch, agronoom)',
    type: 'woordenschat'
  },
  {
    question: 'ἀδελφός',
    answers: ['broer', 'broeder'],
    explanation: '(Philadelphia)',
    type: 'woordenschat'
  },
  {
    question: 'ἄνθρωπος',
    answers: ['mens'],
    explanation: '(antropologie, antropomorf, antroposofie, filantroop)',
    type: 'woordenschat'
  },
  {
    question: 'ἀπόστολος',
    answers: ['apostel'],
    type: 'woordenschat'
  },
  {
    question: 'διάκονος',
    answers: ['dienaar', 'diaken'],
    type: 'woordenschat'
  },
  {
    question: 'διδάσκαλος',
    answers: ['leraar'],
    explanation: '(didactisch)',
    type: 'woordenschat'
  },
  {
    question: 'ἐχθρός',
    answers: ['vijand'],
    type: 'woordenschat'
  },
  {
    question: 'θάνατος',
    answers: ['dood'],
    explanation: '(euthanasie)',
    type: 'woordenschat'
  },
  {
    question: 'θρόνος',
    answers: ['troon'],
    type: 'woordenschat'
  },
  {
    question: 'κόσμος',
    answers: ['orde', 'wereld', 'wereldorde'],
    explanation: '(kosmos, kosmetica, kosmografie, kosmopoliet)',
    type: 'woordenschat'
  },
  {
    question: 'κύριος',
    answers: ['heer', 'de Heer'],
    explanation: '(in de Septuagint gebruikt in plaats van JHWH)',
    type: 'woordenschat'
  },
  {
    question: 'λαός',
    answers: ['volk'],
    explanation: '(vgl. leek)',
    type: 'woordenschat'
  },
  {
    question: 'λεπρός',
    answers: ['melaatse', 'leproos'],
    type: 'woordenschat'
  },
  {
    question: 'λίθος',
    answers: ['steen'],
    explanation:
      '(paleolithicum, mesolithicum, neolithicum: oude, midden en nieuwe stenen tijdperk; monoliet: een enkele steen)',
    type: 'woordenschat'
  },
  {
    question: 'λόγος',
    answers: ['woord'],
    explanation:
      '(zelfde wortel als λέγω: ik zeg; logica, logopedie [= spraakverbetering], antropologie)',
    type: 'woordenschat'
  },
  {
    question: 'νόμος',
    answers: ['wet'],
    explanation: '(Deuteronomium: de tweede wet, agronoom)',
    type: 'woordenschat'
  },
  {
    question: 'ὀφθαλμός',
    answers: ['oog'],
    explanation: '(oftalmoloog)',
    type: 'woordenschat'
  },
  {
    question: 'παραλυτικός',
    answers: ['verlamd', 'de verlamde man'],
    type: 'woordenschat'
  },
  {
    question: 'ποταμός',
    answers: ['rivier'],
    explanation:
      '(hippopotamus: paard van de rivier; Mesopotamië: het land tussen de rivieren Tigris en Euphraat; potamologie = leer van de rivieren)',
    type: 'woordenschat'
  },
  {
    question: 'πρεσβύτερος',
    answers: ['presbyter', 'oudste'],
    type: 'woordenschat'
  },
  {
    question: 'τόπος',
    answers: ['plaats'],
    explanation: '(topografisch)',
    type: 'woordenschat'
  },
  {
    question: 'φιλος',
    answers: ['vriend'],
    explanation: '(vgl. φιλέω, filologie)',
    type: 'woordenschat'
  },
  {
    question: 'φόβος',
    answers: ['vrees'],
    explanation: '(fobie, xenofobie)',
    type: 'woordenschat'
  }
]
const lesson5NewTheory: LessonType = {
  id: 'lesson5-theory-new',
  name: 'Les 5 – Volledige theorie',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson5NewTheory
