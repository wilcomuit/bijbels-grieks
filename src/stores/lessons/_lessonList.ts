import lesson3HijConjugation from "./lesson3/hijConjugation";
import lesson3JijConjugation from "./lesson3/jijConjugation"
import lesson3JullieConjugation from "./lesson3/jullieConjugation";
import lesson3Vocabulary from "./lesson3/vocabulary";
import lesson3VocabularyQuestions from "./lesson3/vocabularyQuestions";
import lesson3WijConjugation from "./lesson3/wijConjugation";
import lesson3ZijConjugation from "./lesson3/zijConjugation";
import lesson4Vocabulary from "./lesson4Vocabulary";
import lesson4VocabularyQuestions from "./lesson4VocabularyQuestions";
import lesson5Vocabulary from "./lesson5Vocabulary";
import lesson6Vocabulary from "./lesson6Vocabulary";
import lesson7Vocabulary from "./lesson7Vocabulary";

export default function lessonList() {
    return [ 
        lesson3Vocabulary,
        //lesson3JijConjugation,
        //lesson3HijConjugation,
        //lesson3WijConjugation,
        //lesson3JullieConjugation,
        //lesson3ZijConjugation,
        //lesson3VocabularyQuestions,
        lesson4Vocabulary,
        //lesson4VocabularyQuestions,
        lesson5Vocabulary,
        lesson6Vocabulary,
        lesson7Vocabulary
    ]
}