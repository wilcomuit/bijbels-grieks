const questions: Array<QuestionType> = [
    {
      question: "αἰτεῖ",
      answers: ["hij vraagt", "zij vraagt", "het vraagt"],
      type: "woordenschat"
    },
    {
      question: "βλασφημεῖ",
      answers: ["hij lastert", "zij lastert", "het lastert", "hij lastert God", "zij lastert God", "het lastert God"],
      explanation: "(vgl. blasfemeren)",
      type: "woordenschat"
    },
    {
      question: "εὐλογεῖ",
      answers: ["hij zegent", "zij zegent", "het zegent"],
      explanation: "(εὐ = goed + λέγω = ik zeg)",
      type: "woordenschat"
    },
    {
      question: "ζητεῖ",
      answers: ["hij zoekt", "zij zoekt", "het zoekt"],
      type: "woordenschat"
    },
    {
      question: "θεωρεῖ",
      answers: ["hij kijkt", "zij kijkt", "het kijkt", "hij ziet", "zij ziet", "het ziet"],
      explanation: "(theorie, theoretisch)",
      type: "woordenschat"
    },
    {
      question: "καλεῖ",
      answers: ["hij roept", "zij roept", "het roept"],
      explanation: "(kallen, Eng. I call)",
      type: "woordenschat"
    },
    {
      question: "λαλεῖ",
      answers: ["hij spreekt", "zij spreekt", "het spreekt"],
      explanation: "(lallen, lollen)",
      type: "woordenschat"
    },
    {
      question: "μαρτυρεῖ",
      answers: ["hij getuigt", "zij getuigt", "het getuigt"],
      explanation: "(martelaar, martyrologie)",
      type: "woordenschat"
    },
    {
      question: "μετανοεῖ",
      answers: ["hij heeft berouw", "zij heeft berouw", "het heeft berouw", "hij komt tot andere gedachten", "zij komt tot andere gedachten", "het komt tot andere gedachten"],
      explanation: "(metanoëtisch, metanoia)",
      type: "woordenschat"
    },
    {
      question: "μισεῖ",
      answers: ["hij haat", "zij haat", "het haat"],
      explanation: "(misantroop, misogyn)",
      type: "woordenschat"
    },
    {
      question: "ποιεῖ",
      answers: ["hij doet", "zij doet", "het doet", "hij maakt", "zij maakt", "het maakt"],
      explanation: "(poëzie)",
      type: "woordenschat"
    },
    {
      question: "τηρεῖ",
      answers: ["hij onderhoudt", "zij onderhoudt", "het onderhoudt"],
      type: "woordenschat"
    },
    {
      question: "φιλεῖ",
      answers: ["hij houdt van", "zij houdt van", "het houdt van", "hij heeft lief", "zij heeft lief", "het heeft lief"],
      explanation: "(filantroop, filatelist, filologie, filosofie, xenofilie)",
      type: "woordenschat"
    }
]
const lesson4HijConjugation: LessonType = {
  id: 'lesson4-hij-conjugation',
  name: 'Les 4 – Hij/zij/het vervoegingen',
  type: 'woordenschat', 
  active: false,
  questions
}
export default lesson4HijConjugation