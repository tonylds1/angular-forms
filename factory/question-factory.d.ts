import { Question } from '../question';
export declare class QuestionFactory {
    static createQuestion(question: Question<any>): Question<any>;
    static createQuestionList(questionList: Question<any>[]): Question<any>[];
}
