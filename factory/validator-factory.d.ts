import { ValidatorFn } from '@angular/forms';
import { Validation } from '../validation';
export declare class ValidatorFactory {
    private validation;
    constructor(validation: Validation);
    createEmailValidator(): ValidatorFn;
    createMaxValidator(): ValidatorFn;
    createMinValidator(): ValidatorFn;
    createMaxLengthValidator(): ValidatorFn;
    createMinLengthValidator(): ValidatorFn;
    createPatternValidator(): ValidatorFn;
    createRequiredValidator(): ValidatorFn;
}
