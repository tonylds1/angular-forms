import { Validation } from '.';
export declare class Required extends Validation {
    private _requiredTrue;
    constructor(message: string, _requiredTrue?: boolean);
    readonly requiredTrue: boolean;
}
