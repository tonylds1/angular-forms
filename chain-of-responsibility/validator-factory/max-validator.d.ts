import { ValidatorFn } from '@angular/forms';
import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
export declare class MaxValidator extends ValidatorFactoryHandler {
    handle(validation: Validation): ValidatorFn;
}
