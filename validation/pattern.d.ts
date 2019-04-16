import { Validation } from '.';
export declare class Pattern extends Validation {
    private _value;
    constructor(message: string, _value: string);
    /** @override */
    isRequired(): boolean;
    readonly value: string;
}
