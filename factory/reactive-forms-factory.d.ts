import { FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { Group } from '../group';
import { Question } from '../question';
import { Validation } from '../validation';
export declare class ReactiveFormsFactory {
    static createFormGroupFromGroups(groups: Group<any>[]): Promise<FormGroup>;
    static createFormGroupFromQuestions(questions: Question<any>[], checkDisabledQuestions?: boolean): Promise<FormGroup>;
    static createFormArrayFromQuestions(questions: Question<any>[][]): Promise<FormArray>;
    static createValidators(validations: Validation[]): Promise<ValidatorFn[]>;
}
