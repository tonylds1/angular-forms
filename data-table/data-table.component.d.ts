import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Status } from '..';
import { Select, Question } from '../question';
import { DataTable } from '../group';
export declare class DataTableComponent implements OnInit {
    readonly Status: Object;
    formArray: FormArray;
    newFormGroup: FormGroup;
    submitted: boolean;
    formGroup: FormGroup;
    group: DataTable;
    formGroupSubmitted: boolean;
    readOnly: boolean;
    error: EventEmitter<Error>;
    ready: EventEmitter<boolean>;
    private _status;
    ngOnInit(): void;
    onChangeOptionSelect(htmlFormControl: HTMLInputElement, formControl: FormControl, question: Select): void;
    getKeysFromObject(object: Object): string[];
    addData(): void;
    removeData(index: number): void;
    resetForms(): void;
    getQuestionByName(name: string): Question<any>;
    isCheckbox(question: Question<any>): boolean;
    readonly status: Status;
    private load();
}
