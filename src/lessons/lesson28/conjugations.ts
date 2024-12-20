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
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀστήρ',
    ev_accusatief: 'ἀστέρα',
    ev_genitief: 'ἀστέρος',
    ev_datief: 'ἀστέρι',
    mv_nominatief: 'ἀστέρες',
    mv_accusatief: 'ἀστέρας',
    mv_genitief: 'ἀστέρων',
    mv_datief: 'ἀστέρσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μάρτυς',
    ev_accusatief: 'μάρτυρα',
    ev_genitief: 'μάρτυρος',
    ev_datief: 'μάρτυρι',
    mv_nominatief: 'μάρτυρες',
    mv_accusatief: 'μάρτυρας',
    mv_genitief: 'μάρτυρων',
    mv_datief: 'μάρτυρσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σωτήρ',
    ev_accusatief: 'σωτῆρα',
    ev_genitief: 'σωτῆρος',
    ev_datief: 'σωτῆρι',
    mv_nominatief: 'σωτῆρες',
    mv_accusatief: 'σωτῆρας',
    mv_genitief: 'σωτῆρων',
    mv_datief: 'σωτῆρσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'χείρ',
    ev_accusatief: 'χειρα',
    ev_genitief: 'χειρός',
    ev_datief: 'χειρι',
    mv_nominatief: 'χειρες',
    mv_accusatief: 'χειρας',
    mv_genitief: 'χειρων',
    mv_datief: 'χερσίν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'γυνή',
    ev_accusatief: 'γυναικα',
    ev_genitief: 'γυναικός',
    ev_datief: 'γυναικι',
    mv_nominatief: 'γυναικες',
    mv_accusatief: 'γυναικας',
    mv_genitief: 'γυναικων',
    mv_datief: 'γυναιξιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'σάρξ',
    ev_accusatief: 'σαρκα',
    ev_genitief: 'σαρκός',
    ev_datief: 'σαρκι',
    mv_nominatief: 'σαρκες',
    mv_accusatief: 'σαρκας',
    mv_genitief: 'σαρκων',
    mv_datief: 'σαρξιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἐλπις',
    ev_accusatief: 'ἐλπίδα',
    ev_genitief: 'ἐλπίδος',
    ev_datief: 'ἐλπίδι',
    mv_nominatief: 'ἐλπίδες',
    mv_accusatief: 'ἐλπίδας',
    mv_genitief: 'ἐλπίδων',
    mv_datief: 'ἐλπίσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'νύξ',
    ev_accusatief: 'νυκτα',
    ev_genitief: 'νυκτός',
    ev_datief: 'νυκτι',
    mv_nominatief: 'νυκτες',
    mv_accusatief: 'νυκτας',
    mv_genitief: 'νυκτων',
    mv_datief: 'νυξιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'παῖς',
    ev_accusatief: 'παιδα',
    ev_genitief: 'παιδός',
    ev_datief: 'παιδι',
    mv_nominatief: 'παιδες',
    mv_accusatief: 'παιδας',
    mv_genitief: 'παιδων',
    mv_datief: 'παισιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πούς',
    ev_accusatief: 'ποδα',
    ev_genitief: 'ποδός',
    ev_datief: 'ποδι',
    mv_nominatief: 'ποδες',
    mv_accusatief: 'ποδας',
    mv_genitief: 'ποδων',
    mv_datief: 'ποσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'χάρις',
    ev_accusatief: 'χάριν',
    ev_genitief: 'χάριτος',
    ev_datief: 'χάριτι',
    mv_nominatief: 'χάριτες',
    mv_accusatief: 'χάριτας',
    mv_genitief: 'χάριτων',
    mv_datief: 'χάρισιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'αἰών',
    ev_accusatief: 'αἰῶνα',
    ev_genitief: 'αἰῶνος',
    ev_datief: 'αἰῶνι',
    mv_nominatief: 'αἰῶνες',
    mv_accusatief: 'αἰῶνας',
    mv_genitief: 'αἰῶνων',
    mv_datief: 'αἰῶσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἀμπελών',
    ev_accusatief: 'ἀμπελῶνα',
    ev_genitief: 'ἀμπελῶνος',
    ev_datief: 'ἀμπελῶνι',
    mv_nominatief: 'ἀμπελῶνες',
    mv_accusatief: 'ἀμπελῶνας',
    mv_genitief: 'ἀμπελῶνων',
    mv_datief: 'ἀμπελῶσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'εἰκών',
    ev_accusatief: 'εἰκόνα',
    ev_genitief: 'εἰκόνος',
    ev_datief: 'εἰκόνι',
    mv_nominatief: 'εἰκόνες',
    mv_accusatief: 'εἰκόνας',
    mv_genitief: 'εἰκόνων',
    mv_datief: 'εἰκόσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Ἕλλην',
    ev_accusatief: 'Ἕλληνα',
    ev_genitief: 'Ἕλληνος',
    ev_datief: 'Ἕλληνι',
    mv_nominatief: 'Ἕλληνες',
    mv_accusatief: 'Ἕλληνας',
    mv_genitief: 'Ἕλληνων',
    mv_datief: 'Ἕλλησιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μήν',
    ev_accusatief: 'μηνα',
    ev_genitief: 'μηνός',
    ev_datief: 'μηνι',
    mv_nominatief: 'μηνες',
    mv_accusatief: 'μηνας',
    mv_genitief: 'μηνων',
    mv_datief: 'μησιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'Σίμων',
    ev_accusatief: 'Σίμωνα',
    ev_genitief: 'Σίμωνος',
    ev_datief: 'Σίμωνι',
    mv_nominatief: 'Σίμωνες',
    mv_accusatief: 'Σίμωνας',
    mv_genitief: 'Σίμωνων',
    mv_datief: 'Σίμωσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'ἄρχων',
    ev_accusatief: 'ἄρχοντα',
    ev_genitief: 'ἄρχοντος',
    ev_datief: 'ἄρχοντι',
    mv_nominatief: 'ἄρχοντες',
    mv_accusatief: 'ἄρχοντας',
    mv_genitief: 'ἄρχοντων',
    mv_datief: 'ἄρχουσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'θυγάτηρ',
    ev_accusatief: 'θυγατέρα',
    ev_genitief: 'θυγατρός',
    ev_datief: 'θυγατρι',
    mv_nominatief: 'θυγατέρες',
    mv_accusatief: 'θυγατέρας',
    mv_genitief: 'θυγατέρων',
    mv_datief: 'θυγατράσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'μήτηρ',
    ev_accusatief: 'μητέρα',
    ev_genitief: 'μητρός',
    ev_datief: 'μητρι',
    mv_nominatief: 'μητέρες',
    mv_accusatief: 'μητέρας',
    mv_genitief: 'μητέρων',
    mv_datief: 'μητράσιν',
    type: 'vervoeging'
  },
  {
    ev_nominatief: 'πατήρ',
    ev_accusatief: 'πατέρα',
    ev_genitief: 'πατρός',
    ev_datief: 'πατρι',
    mv_nominatief: 'πατέρες',
    mv_accusatief: 'πατέρας',
    mv_genitief: 'πατέρων',
    mv_datief: 'πατράσιν',
    type: 'vervoeging'
  }
]

const lesson28Conjugations: LessonType = {
  id: 'lesson28-conjugations',
  name: 'Les 28 – Vervoegingen',
  type: 'vervoeging',
  active: false,
  questions
}
export default lesson28Conjugations
