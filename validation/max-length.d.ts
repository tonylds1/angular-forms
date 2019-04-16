import { Validation } from '.';
export declare class MaxLength extends Validation {
    private _value;
    constructor(message: string, _value: number);
    readonly value: number;
}
