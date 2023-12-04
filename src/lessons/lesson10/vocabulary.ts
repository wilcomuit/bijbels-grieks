const questions: Array<QuestionType> = [
    {
      question: "Ἰωάννης",
      answers: ["Johannes"],
      type: "woordenschat"
    },
    {
      question: "Ἰωάνης",
      answers: ["Johannes"],
      type: "woordenschat"
    },
    {
      question: "βαπτιστής",
      answers: ["doper"],
      explanation: "(vgl. βαπτίζω)",
      type: "woordenschat"
    },
    {
      question: "ἐργάτης",
      answers: ["arbeider"],
      explanation: "(vgl. ἔργον)",
      type: "woordenschat"
    },
    {
      question: "κριτής",
      answers: ["rechter"],
      explanation: "(kritiek)",
      type: "woordenschat"
    },
    {
      question: "μαθητής",
      answers: ["leerling"],
      explanation: "(mathematisch)",
      type: "woordenschat"
    },
    {
      question: "προφήτης",
      answers: ["profeet"],
      type: "woordenschat"
    },
    {
      question: "στρατιώτης",
      answers: ["soldaat"],
      type: "woordenschat"
    },
    {
      question: "τελώνης",
      answers: ["tollenaar"],
      type: "woordenschat"
    },
    {
      question: "ὑποκριτής",
      answers: ["huichelaar"],
      explanation: "(hypocriet)",
      type: "woordenschat"
    },
    {
      question: "νεανίας",
      answers: ["jongeman"],
      type: "woordenschat"
    },
    {
      question: "Ἀνδρέας",
      answers: ["Andreas"],
      type: "woordenschat"
    },
    {
      question: "Ἠλίας",
      answers: ["Elia"],
      type: "woordenschat"
    },
    {
      question: "Σατανᾶς",
      answers: ["satan"],
      type: "woordenschat"
    },
    {
      question: "Ἰούδας",
      answers: ["Judas"],
      type: "woordenschat"
    },
    {
      question: "εἰς",
      answers: ["naar", "tot in", "tot op"],
      explanation: "(eisegenese)",
      type: "woordenschat"
    },
    {
      question: "πρός",
      answers: ["naar", "tot bij"],
      explanation: "(proskynese: πρός [op iemand toe, naar iemand] + κυνέο [kussen, vereren])",
      type: "woordenschat"
    },
    {
      question: "ἀπό",
      answers: ["weg van"],
      explanation: "(apotheek: ἁπό [weg] + τίθημι [leggen])",
      type: "woordenschat"
    },
    {
      question: "ἀπ᾽",
      answers: ["weg van"],
      explanation: "(apotheek: ἁπό [weg] + τίθημι [leggen])",
      type: "woordenschat"
    },
    {
      question: "ἀφ᾽",
      answers: ["weg van"],
      explanation: "(apotheek: ἁπό [weg] + τίθημι [leggen])",
      type: "woordenschat"
    },
    {
      question: "ἐκ",
      answers: ["uit"],
      explanation: "(genese)",
      type: "woordenschat"
    },
    {
      question: "ἐξ",
      answers: ["uit"],
      explanation: "(genese)",
      type: "woordenschat"
    },
    {
      question: "ἐν",
      answers: ["in"],
      explanation: "()",
      type: "woordenschat"
    },
    {
      question: "οὐ",
      answers: ["niet"],
      explanation: "(utopie: οὐ [niet] + τόπος [plaats])",
      type: "woordenschat"
    },
    {
      question: "οὐκ",
      answers: ["niet"],
      explanation: "(utopie: οὐ [niet] + τόπος [plaats])",
      type: "woordenschat"
    },
    {
      question: "οὐχ",
      answers: ["niet"],
      explanation: "(utopie: οὐ [niet] + τόπος [plaats])",
      type: "woordenschat"
    },
    {
      question: "ἀλλά",
      answers: ["maar"],
      type: "woordenschat"
    },
    {
      question: "ἀλλ᾽",
      answers: ["maar"],
      type: "woordenschat"
    },
    {
      question: "γάρ",
      answers: ["want", "omdat"],
      explanation: "(vaak: omdat)",
      type: "woordenschat"
    },
    {
      question: "οὖν",
      answers: ["dus"],
      type: "woordenschat"
    },
    {
      question: "δέ",
      answers: ["maar", "en"],
      type: "woordenschat"
    },
    {
      question: "οὐδέ",
      answers: ["en niet", "zelfs niet", "maar niet", "noch"],
      type: "woordenschat"
    },
    {
      question: "ἄρα",
      answers: ["dus"],
      explanation: "(zachter dan οὖν)",
      type: "woordenschat"
    }
]
const lesson10Vocabulary: LessonType = {
  id: 'lesson10-vocabulary',
  name: 'Les 10 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson10Vocabulary