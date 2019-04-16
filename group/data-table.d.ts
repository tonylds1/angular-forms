import { Group } from '.';
import { Question } from '../question';
import { Validation } from '../validation';
export declare class DataTable extends Group<Question<any>[][]> {
    private _validations;
    constructor(code: string, title: string, questions: Question<any>[][], _validations: Validation[], description: string);
    getQuestionByName(name: string): Question<any>;
    isRequired(): boolean;
    readonly validations: Validation[];
}
