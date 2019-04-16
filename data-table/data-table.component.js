var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Status } from '..';
import { SelectService, QuestionType } from '../question';
import { DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.Status = Status;
        this.submitted = false;
        this.formGroupSubmitted = false;
        this.readOnly = false;
        this.error = new EventEmitter();
        this.ready = new EventEmitter();
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formArray = this.formGroup.get(this.group.code);
        if (this.formArray) {
            this._status = Status.LOADING;
            this.load()
                .then(function () {
                _this._status = Status.READY;
                _this.ready.emit();
            })
                .catch(function (error) {
                _this._status = Status.ERROR;
                _this.error.emit(error);
            });
        }
    };
    DataTableComponent.prototype.onChangeOptionSelect = function (htmlFormControl, formControl, question) {
        SelectService.onChangeOption(htmlFormControl, formControl, question);
    };
    DataTableComponent.prototype.getKeysFromObject = function (object) {
        return Object.keys(object);
    };
    DataTableComponent.prototype.addData = function () {
        this.submitted = true;
        if (!this.newFormGroup.valid) {
            return;
        }
        this.formArray.push(Object.assign(new FormGroup({}), this.newFormGroup));
        this.resetForms();
    };
    DataTableComponent.prototype.removeData = function (index) {
        this.formArray.removeAt(index);
    };
    DataTableComponent.prototype.resetForms = function () {
        this.newFormGroup.reset();
        this.submitted = false;
    };
    DataTableComponent.prototype.getQuestionByName = function (name) {
        for (var _i = 0, _a = this.group.questions[0]; _i < _a.length; _i++) {
            var question = _a[_i];
            if (name === question.name) {
                return question;
            }
        }
        return null;
    };
    DataTableComponent.prototype.isCheckbox = function (question) {
        return QuestionType.CHECKBOX === question.type;
    };
    Object.defineProperty(DataTableComponent.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, error_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    _a = this;
                                    return [4 /*yield*/, ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions[0], false)];
                                case 1:
                                    _a.newFormGroup = _b.sent();
                                    resolve();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_1 = _b.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rb-data-table',
                    template: "\n    <fieldset *ngIf=\"Status['READY'] === status\" class=\"rb-data-table rb-data-table-{{ group.code }}\" [formGroup]=\"formGroup\"\n      [ngClass]=\"{ 'read-only': readOnly }\">\n      <legend>\n        <span [ngClass]=\"{ 'required-control': group.isRequired() && !readOnly }\">\n          {{ group.title }}\n        </span>\n        {{ group.description }}\n      </legend>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead>\n            <tr>\n              <th class=\"text-center\" *ngFor=\"let question of group.questions[0]\">\n                <span [ngClass]=\"{ 'required-control': question.isRequired() && !readOnly }\">\n                  {{ question.description }}\n                </span>\n              </th>\n              <th class=\"text-center\" *ngIf=\"!readOnly\">\n                {{ 'ACTION' | translate }}\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr [formGroup]=\"newFormGroup\" *ngIf=\"!readOnly\">\n              <td *ngFor=\"let question of group.questions[0]\">\n                <ng-container [ngSwitch]=\"question.type\">\n\n                  <ng-template ngSwitchCase=\"checkbox\">\n                    <div class=\"checkbox\">\n                      <label>\n                        <input type=\"checkbox\" [name]=\"question.name\" [formControlName]=\"question.name\" />\n                        {{ question.description }}\n                      </label>\n                      <rb-validation-message [validations]=\"question.validations\"\n                                             [control]=\"newFormGroup.get(question.name)\"\n                                             [submitted]=\"submitted\">\n                      </rb-validation-message>\n                    </div> <!--/.checkbox-->\n                  </ng-template> <!--/checkbox-->\n\n                  <ng-template ngSwitchCase=\"radio\">\n                    <div class=\"radio\" *ngFor=\"let option of question.options\">\n                      <label>\n                        <input type=\"radio\" [name]=\"question.name\" [value]=\"option\" [formControlName]=\"question.name\" />\n                        {{ option }}\n                      </label>\n                    </div> <!--/.radio-->\n                    <rb-validation-message [validations]=\"question.validations\"\n                                           [control]=\"newFormGroup.get(question.name)\"\n                                           [submitted]=\"submitted\">\n                    </rb-validation-message>\n                  </ng-template> <!--/radio-->\n\n                  <ng-template ngSwitchCase=\"select\">\n                    <select [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\" #selectQuestion\n                          [formControlName]=\"question.name\"\n                          (change)=\"onChangeOptionSelect(selectQuestion, newFormGroup.get(question.name), question)\">\n                      <option disabled [value]=\"null\">\n                        {{ question.placeholder ? question.placeholder : '' }}\n                      </option>\n                      <option *ngFor=\"let option of question.options\" [value]=\"option['value'] || option\">\n                        {{ option['description'] || option }}\n                      </option>\n                    </select>\n                    <ng-container *ngIf=\"question.editableOption && question.editableOption.length\">\n                      <input [hidden]=\"question.editableOption !== selectQuestion.value\"\n                             type=\"text\" [id]=\"question.name\" class=\"form-control editable-option\" [name]=\"question.name\"\n                             [formControlName]=\"question.name\" />\n                    </ng-container>\n                    <rb-validation-message [validations]=\"question.validations\"\n                                           [control]=\"newFormGroup.get(question.name)\"\n                                           [submitted]=\"submitted\">\n                    </rb-validation-message>\n                  </ng-template> <!--/select-->\n\n                  <ng-template ngSwitchCase=\"textarea\">\n                    <textarea [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\" rows=\"5\"\n                              placeholder=\"{{ question.placeholder ? question.placeholder : '' }}\"\n                              [formControlName]=\"question.name\">\n                    </textarea>\n                    <rb-validation-message [validations]=\"question.validations\"\n                                           [control]=\"newFormGroup.get(question.name)\"\n                                           [submitted]=\"submitted\">\n                    </rb-validation-message>\n                  </ng-template> <!--/textarea-->\n\n                  <ng-template ngSwitchCase=\"text\" ngSwitchDefault>\n                    <input type=\"text\" [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\"\n                            placeholder=\"{{ question.placeholder ? question.placeholder : '' }}\"\n                            [formControlName]=\"question.name\" [mask]=\"question.mask\" />\n                    <rb-validation-message [validations]=\"question.validations\"\n                                           [control]=\"newFormGroup.get(question.name)\"\n                                           [submitted]=\"submitted\">\n                    </rb-validation-message>\n                  </ng-template> <!--/text-->\n\n                </ng-container> <!--/ngSwitch-questionType-->\n              </td>\n              <td class=\"text-center\">\n                <button class=\"btn btn-default btn-add-data\" (click)=\"addData()\">\n                  <i class=\"rb-ico rb-ico-add\" aria-hidden=\"true\"></i>\n                  {{ 'ADD' | translate }}\n                </button>\n              </td>\n            </tr>\n            <tr class=\"data\" *ngFor=\"let data of formArray?.value; let indexData = index\">\n              <td *ngFor=\"let key of getKeysFromObject(data)\" [class.text-center]=\"isCheckbox(getQuestionByName(key))\">\n                <ng-container [ngSwitch]=\"getQuestionByName(key).type\">\n                  <ng-template ngSwitchCase=\"checkbox\">\n                    <i class=\"rb-ico rb-ico-square rb-ico-{{ data[key] ? 'checked' : 'unchecked' }}\" aria-hidden=\"true\"></i>\n                  </ng-template>\n\n                  <ng-template ngSwitchDefault>\n                    {{ data[key] || 'NOT_INFORMED' | translate }}\n                  </ng-template>\n                </ng-container>\n              </td>\n              <td class=\"text-center\" *ngIf=\"!readOnly\">\n                <button class=\"btn btn-default btn-remove-data\" (click)=\"removeData(indexData)\">\n                  <i class=\"rb-ico rb-ico-remove\" aria-hidden=\"true\"></i>\n                  {{ 'REMOVE' | translate }}\n                </button>\n              </td>\n            </tr>\n            <tr *ngIf=\"readOnly && !formArray?.value.length\">\n              <td [attr.colspan]=\"group.questions[0].length\" class=\"text-center\">{{ 'NO_REGISTERS' | translate }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div> <!--/.table-responsive-->\n      <rb-validation-message [validations]=\"group.validations\"\n                             [control]=\"formArray\"\n                             [submitted]=\"formGroupSubmitted\">\n      </rb-validation-message>\n    </fieldset>\n  ",
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.propDecorators = {
        "formGroup": [{ type: Input },],
        "group": [{ type: Input },],
        "formGroupSubmitted": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "error": [{ type: Output },],
        "ready": [{ type: Output },],
    };
    return DataTableComponent;
}());
export { DataTableComponent };
//# sourceMappingURL=data-table.component.js.map