import { Dependency, Question } from '.';
import { Validation } from '../validation';
export declare class Checkbox extends Question<boolean> {
    private _defaultOption;
    static fromJson(question: Checkbox): Checkbox;
    constructor(name: string, description: string, dependencies?: Dependency[], answer?: boolean, validations?: Validation[], disabled?: boolean, _defaultOption?: boolean);
    readonly defaultOption: boolean;
}
