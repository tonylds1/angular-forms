import { ValidatorFn } from '@angular/forms';
import { Validation } from '../../validation';
export declare abstract class ValidatorFactoryHandler {
    private nextHandler;
    append(handler: ValidatorFactoryHandler): ValidatorFactoryHandler;
    handle(validation: Validation): ValidatorFn;
}
