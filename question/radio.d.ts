import { Choice, Dependency, Option } from '.';
import { Validation } from '../validation';
export declare class Radio extends Choice {
    static fromJson(question: Radio): Radio;
    constructor(name: string, description: string, dependencies?: Dependency[], answer?: string, validations?: Validation[], disabled?: boolean, options?: Option[] | string[], defaultOption?: string);
}
