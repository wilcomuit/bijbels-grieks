type LessonType = {
    id: string
    name: string
    active: boolean
    questions: Array<QuestionType>
}

type QuestionType = {
    question: string
    answers: Array<string>
    explanation?: string
    type: string
}