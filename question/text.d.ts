import { Dependency, Question } from '.';
import { Validation } from '../validation';
export declare class Text extends Question<string> {
    private _mask;
    private _placeholder;
    private _tooltip;
    static fromJson(question: Text): Text;
    constructor(name: string, description: string, dependencies?: Dependency[], answer?: string, validations?: Validation[], disabled?: boolean, _mask?: string, _placeholder?: string, _tooltip?: string);
    readonly mask: string;
    readonly placeholder: string;
    readonly tooltip: string;
}
