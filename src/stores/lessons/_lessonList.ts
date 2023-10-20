import lesson3HijConjugation from "./lesson3/hijConjugation";
import lesson3JijConjugation from "./lesson3/jijConjugation"
import lesson3JullieConjugation from "./lesson3/jullieConjugation";
import lesson3Vocabulary from "./lesson3/vocabulary";
import lesson3WijConjugation from "./lesson3/wijConjugation";
import lesson3ZijConjugation from "./lesson3/zijConjugation";
import lesson4Vocabulary from "./lesson4/vocabulary";
import lesson5Conjugations from "./lesson5/conjugations";
import lesson5Vocabulary from "./lesson5/vocabulary";
import lesson6Vocabulary from "./lesson6/lesson6Vocabulary";
import lesson7Vocabulary from "./lesson7/lesson7Vocabulary";
import lesson8Vocabulary from "./lesson8/lesson8Vocabulary";
import lesson9Vocabulary from "./lesson9/lesson9Vocabulary";

export default function lessonList() {
    return [ 
        lesson3Vocabulary,
        lesson3JijConjugation,
        lesson3HijConjugation,
        lesson3WijConjugation,
        lesson3JullieConjugation,
        lesson3ZijConjugation,
        lesson4Vocabulary,
        lesson5Vocabulary,
        lesson5Conjugations,
        lesson6Vocabulary,
        lesson7Vocabulary,
        lesson8Vocabulary,
        lesson9Vocabulary,
    ]
}