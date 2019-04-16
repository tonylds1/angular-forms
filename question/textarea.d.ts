import { Dependency, Question } from '.';
import { Validation } from '../validation';
export declare class TextArea extends Question<string> {
    private _placeholder;
    static fromJson(question: TextArea): TextArea;
    constructor(name: string, description: string, dependencies?: Dependency[], answer?: string, validations?: Validation[], disabled?: boolean, _placeholder?: string);
    readonly placeholder: string;
}
