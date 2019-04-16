import { Group } from '../group';
export declare abstract class GroupBuilder<QuestionListType> {
    protected code: string;
    protected title: string;
    protected description: string;
    protected questions: QuestionListType[];
    constructor(code: string, title: string, description: string);
    abstract addQuestion(question: QuestionListType): void;
    abstract build(): Group<any>;
}
