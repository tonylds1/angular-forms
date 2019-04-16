import { GroupBuilder } from '.';
import { Fieldset } from '../group';
import { Question } from '../question';
export declare class FieldsetBuilder extends GroupBuilder<Question<any>> {
    constructor(code: string, title: string, description: string);
    addQuestion(question: Question<any>): void;
    build(): Fieldset;
}
