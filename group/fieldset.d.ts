import { Group } from '.';
import { Question } from '../question';
export declare class Fieldset extends Group<Question<any>[]> {
    constructor(code: string, title: string, questions: Question<any>[], description: string);
    getQuestionByName(name: string): Question<any>;
}
