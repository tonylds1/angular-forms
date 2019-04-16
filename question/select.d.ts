import { Choice, Dependency, Option } from '.';
import { Validation } from '../validation';
export declare class Select extends Choice {
    private _editableOption;
    private _placeholder;
    static fromJson(question: Select): Select;
    constructor(name: string, description: string, dependencies?: Dependency[], answer?: string, validations?: Validation[], disabled?: boolean, options?: Option[] | string[], defaultOption?: string, _editableOption?: string, _placeholder?: string);
    readonly editableOption: string;
    readonly placeholder: string;
}
