import { FormGroup } from '@angular/forms';
import { Question } from '.';
export declare class DependencyService {
    static hideQuestion(question: Question<any>, formGroup: FormGroup): boolean;
    private static executeOperation(answerDependency, dependency);
    private static setStatusFormControl(formControl, hidden);
}
