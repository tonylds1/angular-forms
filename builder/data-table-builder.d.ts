import { GroupBuilder } from '.';
import { DataTable } from '../group';
import { Question } from '../question';
import { Validation } from '../validation';
export declare class DataTableBuilder extends GroupBuilder<Question<any>[]> {
    private validations;
    constructor(code: string, title: string, validations: Validation[], description: string);
    addQuestion(question: Question<any>[]): void;
    build(): DataTable;
}
