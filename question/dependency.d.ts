import { DependencyCriteria } from '.';
export declare class Dependency {
    private _code;
    private _criteria;
    private _expectedAnswer;
    constructor(_code: string, _criteria: DependencyCriteria, _expectedAnswer: string);
    readonly code: string;
    readonly criteria: DependencyCriteria;
    readonly expectedAnswer: string;
}
