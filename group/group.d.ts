import { GroupType } from '.';
import { Question } from '../question';
export declare abstract class Group<QuestionListType> {
    protected _code: string;
    protected _title: string;
    protected _type: GroupType;
    protected _questions: QuestionListType;
    protected _description: string;
    constructor(_code: string, _title: string, _type: GroupType, _questions: QuestionListType, _description: string);
    readonly code: string;
    title: string;
    description: string;
    readonly type: GroupType;
    readonly questions: QuestionListType;
    abstract getQuestionByName(name: string): Question<any>;
}
