import { Dependency, Option, Question, QuestionType } from '.';
import { Validation } from '../validation';
export declare abstract class Choice extends Question<string> {
    protected _options: Option[] | string[];
    protected _defaultOption: string;
    constructor(name: string, description: string, type: QuestionType, dependencies?: Dependency[], answer?: string, validations?: Validation[], disabled?: boolean, _options?: Option[] | string[], _defaultOption?: string);
    readonly options: Option[] | string[];
    readonly defaultOption: string;
}
