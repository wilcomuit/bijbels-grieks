const questions: Array<QuestionType> = [
    {
      question: "αἰτεῖς",
      answers: ["jij vraagt", "u vraagt"],
      type: "woordenschat"
    },
    {
      question: "βλασφημεῖς",
      answers: ["jij lastert", "u lastert", "jij lastert God", "u lastert God"],
      explanation: "(vgl. blasfemeren)",
      type: "woordenschat"
    },
    {
      question: "εὐλογεῖς",
      answers: ["jij zegent", "u zegent"],
      explanation: "(εὐ = goed + λέγω = ik zeg)",
      type: "woordenschat"
    },
    {
      question: "ζητεῖς",
      answers: ["jij zoekt", "u zoekt"],
      type: "woordenschat"
    },
    {
      question: "θεωρεῖς",
      answers: ["jij kijkt", "u kijkt", "jij ziet", "u ziet"],
      explanation: "(theorie, theoretisch)",
      type: "woordenschat"
    },
    {
      question: "καλεῖς",
      answers: ["jij roept", "u roept"],
      explanation: "(kallen, Eng. I call)",
      type: "woordenschat"
    },
    {
      question: "λαλεῖς",
      answers: ["jij spreekt", "u spreekt"],
      explanation: "(lallen, lollen)",
      type: "woordenschat"
    },
    {
      question: "μαρτυρεῖς",
      answers: ["jij getuigt", "u getuigt"],
      explanation: "(martelaar, martyrologie)",
      type: "woordenschat"
    },
    {
      question: "μετανοεῖς",
      answers: ["jij hebt berouw", "u heeft berouw", "jij komt tot andere gedachten", "u komt tot andere gedachten"],
      explanation: "(metanoëtisch, metanoia)",
      type: "woordenschat"
    },
    {
      question: "μισεῖς",
      answers: ["jij haat", "u haat"],
      explanation: "(misantroop, misogyn)",
      type: "woordenschat"
    },
    {
      question: "ποιεῖς",
      answers: ["jij doet", "u doet", "jij maakt", "u maakt"],
      explanation: "(poëzie)",
      type: "woordenschat"
    },
    {
      question: "τηρεῖς",
      answers: ["jij onderhoudt", "u onderhoudt"],
      type: "woordenschat"
    },
    {
      question: "φιλεῖς",
      answers: ["jij houdt van", "u houdt van", "jij hebt lief", "u heeft lief"],
      explanation: "(filantroop, filatelist, filologie, filosofie, xenofilie)",
      type: "woordenschat"
    }
]
const lesson4JijConjugation: LessonType = {
  id: 'lesson4-jij-conjugation',
  name: 'Les 4 – Jij/u vervoegingen',
  type: 'woordenschat', 
  active: false,
  questions
}
export default lesson4JijConjugation