import { AbstractControl } from '@angular/forms';
import { Validation } from '../validation';
export declare class ValidationMessageComponent {
    control: AbstractControl;
    submitted: boolean;
    validations: Validation[];
}
