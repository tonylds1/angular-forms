import { Validation } from '.';
export declare class MinLength extends Validation {
    private _value;
    constructor(message: string, _value: number);
    readonly value: number;
}
