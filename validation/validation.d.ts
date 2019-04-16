import { ValidationType } from '.';
export declare abstract class Validation {
    private _type;
    private _message;
    constructor(_type: ValidationType, _message: string);
    isRequired(): boolean;
    readonly type: ValidationType;
    readonly message: string;
}
