import { Dependency, QuestionType } from '.';
import { Validation } from '../validation';
export declare abstract class Question<Answer> {
    protected _name: string;
    protected _description: string;
    protected _type: QuestionType;
    protected _dependencies: Dependency[];
    protected _answer: Answer;
    protected _validations: Validation[];
    protected _disabled: boolean;
    constructor(_name: string, _description: string, _type: QuestionType, _dependencies?: Dependency[], _answer?: Answer, _validations?: Validation[], _disabled?: boolean);
    isRequired(): boolean;
    readonly name: string;
    description: string;
    readonly type: QuestionType;
    readonly dependencies: Dependency[];
    readonly answer: Answer;
    readonly validations: Validation[];
    readonly disabled: boolean;
}
