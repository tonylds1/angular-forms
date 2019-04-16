import { AfterViewChecked, ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Status } from '.';
import { Group } from './group';
import { Select, Question } from './question';
export declare class AngularFormsComponent implements OnInit, OnChanges, AfterViewChecked {
    private changeDetectorRef;
    private translateService;
    readonly Status: Object;
    formGroup: FormGroup;
    submitted: boolean;
    groups: Group<any>[];
    data: any;
    lang: string;
    readOnly: boolean;
    error: EventEmitter<Error>;
    ready: EventEmitter<boolean>;
    private _status;
    constructor(changeDetectorRef: ChangeDetectorRef, translateService: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    getGroupByCode(code: string): Group<any>;
    hideQuestion(question: Question<any>, formGroup: FormGroup): boolean;
    onChangeOptionSelect(htmlFormControl: HTMLInputElement, formControl: FormControl, question: Select): void;
    submit(): void;
    getForm(): {
        valid: boolean;
        value: Object;
    };
    isPristine(): boolean;
    isDirty(): boolean;
    isValid(): boolean;
    getAnswersGroups(): Object;
    getAnswers(): Object;
    getNewAnswers(answersGroups: Object): any;
    onError(error: Error): void;
    readonly status: Status;
    private configTranslate();
    private load();
    private convertAnswersOfGroupToString(answersGroup);
    private clear();
    private printErrorLog(error);
}
