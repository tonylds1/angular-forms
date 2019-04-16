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
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularForms, Status } from '.';
import { GroupType } from './group';
import { DependencyService, SelectService } from './question';
import { ReactiveFormsFactory } from './factory';
import { StringUtils } from './util';
var AngularFormsComponent = /** @class */ (function () {
    function AngularFormsComponent(changeDetectorRef, translateService) {
        this.changeDetectorRef = changeDetectorRef;
        this.translateService = translateService;
        this.Status = Status;
        this.submitted = false;
        this.groups = [];
        this.lang = 'en-US';
        this.readOnly = false;
        this.error = new EventEmitter();
        this.ready = new EventEmitter();
    }
    AngularFormsComponent.prototype.ngOnInit = function () {
        this.configTranslate();
    };
    AngularFormsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['groups']) {
            this.data = changes['groups'].currentValue;
            var groups = changes['groups'].currentValue;
            if (!!groups) {
                this._status = Status.LOADING;
                this.load()
                    .then(function () {
                    _this._status = Status.READY;
                    _this.ready.emit();
                })
                    .catch(function (error) {
                    _this._status = Status.ERROR;
                    _this.printErrorLog(error);
                    _this.error.emit(error);
                });
            }
            else {
                this.clear();
            }
        }
    };
    AngularFormsComponent.prototype.ngAfterViewChecked = function () {
        this.changeDetectorRef.detectChanges();
    };
    AngularFormsComponent.prototype.getGroupByCode = function (code) {
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.code === code) {
                return group;
            }
        }
    };
    AngularFormsComponent.prototype.hideQuestion = function (question, formGroup) {
        return DependencyService.hideQuestion(question, formGroup);
    };
    AngularFormsComponent.prototype.onChangeOptionSelect = function (htmlFormControl, formControl, question) {
        SelectService.onChangeOption(htmlFormControl, formControl, question);
    };
    AngularFormsComponent.prototype.submit = function () {
        this.submitted = true;
    };
    AngularFormsComponent.prototype.getForm = function () {
        return { valid: this.isValid(), value: this.getAnswersGroups() };
    };
    AngularFormsComponent.prototype.isPristine = function () {
        return this.formGroup.pristine;
    };
    AngularFormsComponent.prototype.isDirty = function () {
        return this.formGroup.dirty;
    };
    AngularFormsComponent.prototype.isValid = function () {
        return this.formGroup.valid;
    };
    AngularFormsComponent.prototype.getAnswersGroups = function () {
        var _this = this;
        var answersGroups = this.formGroup.value;
        Object.keys(answersGroups).forEach(function (groupIndex) {
            if (answersGroups[groupIndex] instanceof Array) {
                answersGroups[groupIndex].map(function (answersGroup) { return _this.convertAnswersOfGroupToString(answersGroup); });
                return;
            }
            answersGroups[groupIndex] = _this.convertAnswersOfGroupToString(answersGroups[groupIndex]);
        });
        return answersGroups;
    };
    AngularFormsComponent.prototype.getAnswers = function () {
        return this.getNewAnswers(this.getAnswersGroups());
    };
    AngularFormsComponent.prototype.getNewAnswers = function (answersGroups) {
        var answers = this.data.reduce(function (answers, group) {
            if (GroupType.FIELDSET === group.type) {
                group.questions.forEach(function (question) {
                    answers[group.code] = {
                        questionario: question.quizId,
                        grupo: question.groupId,
                        pergunta: question.questionId,
                        resposta: answersGroups[group.code][question.code]
                    };
                });
            }
            else {
                group.questions.map(function (questions) {
                    answers[group.code] = {
                        questionario: questions[0].quizId,
                        grupo: questions[0].groupId,
                        pergunta: questions[0].questionId,
                        resposta: answersGroups[group.code]
                    };
                });
            }
            return answers;
        }, {});
        return answers;
    };
    AngularFormsComponent.prototype.onError = function (error) {
        this.clear();
        this.printErrorLog(error);
        this.error.emit(error);
    };
    Object.defineProperty(AngularFormsComponent.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    AngularFormsComponent.prototype.configTranslate = function () {
        this.translateService.addLangs(['en-US', 'pt-BR']);
        this.translateService.setDefaultLang('en-US');
        this.translateService.use(this.lang || 'en-US');
    };
    AngularFormsComponent.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b, error_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 3, , 4]);
                                    _a = this;
                                    return [4 /*yield*/, AngularForms.fromJson(this.groups)];
                                case 1:
                                    _a.groups = _c.sent();
                                    _b = this;
                                    return [4 /*yield*/, ReactiveFormsFactory.createFormGroupFromGroups(this.groups)];
                                case 2:
                                    _b.formGroup = _c.sent();
                                    resolve();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _c.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AngularFormsComponent.prototype.convertAnswersOfGroupToString = function (answersGroup) {
        Object.keys(answersGroup)
            .forEach(function (questionIndex) { return answersGroup[questionIndex] = StringUtils.convertToString(answersGroup[questionIndex]); });
        return answersGroup;
    };
    AngularFormsComponent.prototype.clear = function () {
        this._status = null;
        this.formGroup = null;
    };
    AngularFormsComponent.prototype.printErrorLog = function (error) {
        console.error("[AngularForms] " + error.name + " :: " + error.message);
    };
    AngularFormsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rb-angular-forms',
                    template: "\n    <form *ngIf=\"Status['READY'] === status\" class=\"rb-angular-forms\" [formGroup]=\"formGroup\" [ngClass]=\"{ 'read-only': readOnly }\">\n      <ng-container *ngFor=\"let group of groups\">\n\n        <ng-container [ngSwitch]=\"group.type\">\n\n          <ng-container *ngSwitchCase=\"'group'\">\n            <fieldset class=\"rb-fieldset rb-fieldset-{{ group.code }}\" [formGroup]=\"formGroup.get(group.code)\">\n              <legend *ngIf=\"'Ungrouped' !== group.title\">{{ group.title }}</legend>\n              <p>{{ group.description }}</p>\n              <ng-container *ngFor=\"let question of group.questions\">\n\n                <ng-container [ngSwitch]=\"question.type\">\n\n                  <ng-template ngSwitchCase=\"checkbox\">\n                    <div class=\"form-group\" [hidden]=\"hideQuestion(question, formGroup.get(group.code))\">\n                      <ng-container *ngIf=\"!readOnly; else readOnlyCheckbox\">\n                        <div class=\"checkbox\">\n                          <label>\n                            <input type=\"checkbox\" [name]=\"question.name\" [formControlName]=\"question.name\" />\n                            <span [ngClass]=\"{ 'required-control': question.isRequired() }\">\n                              {{ question.description }}\n                            </span>\n                          </label>\n                          <rb-validation-message [validations]=\"question.validations\"\n                                                 [control]=\"formGroup.get(group.code).get(question.name)\"\n                                                 [submitted]=\"submitted\">\n                          </rb-validation-message>\n                        </div> <!--/.checkbox-->\n                      </ng-container> <!--/!readOnly-->\n\n                      <ng-template #readOnlyCheckbox>\n                        <label>\n                          <i class=\"rb-ico rb-ico-square rb-ico-{{ question.answer ? 'checked' : 'unchecked' }}\" aria-hidden=\"true\"></i>\n                          {{ question.description }}\n                        </label>\n                      </ng-template> <!--/readOnly-->\n                    </div> <!--/.form-group-->\n                  </ng-template> <!--/checkbox-->\n\n                  <ng-template ngSwitchCase=\"radio\">\n                    <div class=\"form-group\" [hidden]=\"hideQuestion(question, formGroup.get(group.code))\">\n                      <ng-container *ngIf=\"!readOnly; else readOnlyRadio\">\n                        <label [ngClass]=\"{ 'required-control': question.isRequired() }\">\n                          {{ question.description }}\n                        </label>\n                        <div class=\"radio\" *ngFor=\"let option of question.options\">\n                          <label>\n                            <input type=\"radio\" [name]=\"question.name\" [value]=\"option\" [formControlName]=\"question.name\" />\n                            {{ option }}\n                          </label>\n                        </div> <!--/.radio-->\n                        <rb-validation-message [validations]=\"question.validations\"\n                                               [control]=\"formGroup.get(group.code).get(question.name)\"\n                                               [submitted]=\"submitted\">\n                        </rb-validation-message>\n                      </ng-container> <!--/!readOnly-->\n\n                      <ng-template #readOnlyRadio>\n                        <label>{{ question.description }}</label>\n                        <span>{{ question.answer || 'NOT_INFORMED' | translate }}</span>\n                      </ng-template> <!--/readOnly-->\n                    </div> <!--/.form-group-->\n                  </ng-template> <!--/radio-->\n\n                  <ng-template ngSwitchCase=\"select\">\n                    <div class=\"form-group\" [hidden]=\"hideQuestion(question, formGroup.get(group.code))\">\n                      <ng-container *ngIf=\"!readOnly; else readOnlySelect\">\n                        <label [for]=\"question.name\" [ngClass]=\"{ 'required-control': question.isRequired() }\">\n                          {{ question.description }}\n                        </label>\n                        <select [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\" #selectQuestion #question.name\n                                [formControlName]=\"question.name\"\n                                (change)=\"onChangeOptionSelect(selectQuestion, formGroup.get(group.code).get(question.name), question)\">\n                          <option disabled [value]=\"null\">\n                            {{ question.placeholder ? question.placeholder : '' }}\n                          </option>\n                          <option *ngFor=\"let option of question.options\" [value]=\"option['value'] || option\">\n                            {{ option['description'] || option }}\n                          </option>\n                        </select>\n                        <ng-container *ngIf=\"question.editableOption && question.editableOption.length\">\n                          <input [hidden]=\"question.editableOption !== selectQuestion.value\"\n                                 type=\"text\" [id]=\"question.name\" class=\"form-control editable-option\" [name]=\"question.name\"\n                                 [formControlName]=\"question.name\" />\n                        </ng-container>\n                        <rb-validation-message [validations]=\"question.validations\"\n                                               [control]=\"formGroup.get(group.code).get(question.name)\"\n                                               [submitted]=\"submitted\">\n                        </rb-validation-message>\n                      </ng-container> <!--!readOnly-->\n\n                      <ng-template #readOnlySelect>\n                        <label>{{ question.description }}</label>\n                        <span>{{ question.answer || 'NOT_INFORMED' | translate }}</span>\n                      </ng-template> <!--/readOnly-->\n                    </div> <!--/.form-group-->\n                  </ng-template> <!--/select-->\n\n                  <ng-template ngSwitchCase=\"textarea\">\n                    <div class=\"form-group\" [hidden]=\"hideQuestion(question, formGroup.get(group.code))\">\n                      <ng-container *ngIf=\"!readOnly; else readOnlyTextarea\">\n                        <label [for]=\"question.name\" [ngClass]=\"{ 'required-control': question.isRequired() }\">\n                          {{ question.description }}\n                        </label>\n                        <textarea [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\" rows=\"5\"\n                                  placeholder=\"{{ question.placeholder ? question.placeholder : '' }}\"\n                                  [formControlName]=\"question.name\">\n                        </textarea>\n                        <rb-validation-message [validations]=\"question.validations\"\n                                               [control]=\"formGroup.get(group.code).get(question.name)\"\n                                               [submitted]=\"submitted\">\n                        </rb-validation-message>\n                      </ng-container> <!--!readOnly-->\n\n                      <ng-template #readOnlyTextarea>\n                        <label>{{ question.description }}</label>\n                        <span>{{ question.answer || 'NOT_INFORMED' | translate }}</span>\n                      </ng-template> <!--/readOnly-->\n                    </div> <!--/.form-group-->\n                  </ng-template> <!--/textarea-->\n\n                  <ng-template ngSwitchCase=\"text\" ngSwitchDefault>\n                    <div class=\"form-group\" [hidden]=\"hideQuestion(question, formGroup.get(group.code))\">\n                      <ng-container *ngIf=\"!readOnly; else readOnlyText\">\n                        <label [for]=\"question.name\" [ngClass]=\"{ 'required-control': question.isRequired() }\">\n                          {{ question.description }}\n                        </label>\n\n                        <rb-tooltip *ngIf=\"question.tooltip\"\n                            [tooltip]=\"question.tooltip\"\n                            [control]=\"formGroup.get(group.code).get(question.name)\">\n                        </rb-tooltip>\n\n                        <input type=\"text\" [id]=\"question.name\" class=\"form-control\" [name]=\"question.name\"\n                               placeholder=\"{{ question.placeholder ? question.placeholder : '' }}\"\n                               [formControlName]=\"question.name\" [mask]=\"question.mask\" #question.name />\n\n                        <rb-validation-message [validations]=\"question.validations\"\n                                               [control]=\"formGroup.get(group.code).get(question.name)\"\n                                               [submitted]=\"submitted\">\n                        </rb-validation-message>\n\n                      </ng-container> <!--!readOnly-->\n\n                      <ng-template #readOnlyText>\n                        <label>{{ question.description }}</label>\n                        <span>{{ question.answer || 'NOT_INFORMED' | translate }}</span>\n                      </ng-template> <!--readOnly-->\n                    </div> <!--/.form-group-->\n                  </ng-template> <!--/text-->\n                </ng-container> <!--/ngSwitch-questionType-->\n\n              </ng-container> <!--/ngFor-question-->\n            </fieldset>\n          </ng-container> <!--/ngSwitchCase-fieldset-->\n\n          <ng-container *ngSwitchDefault>\n            <rb-data-table [group]=\"group\" [formGroup]=\"formGroup\" [formGroupSubmitted]=\"submitted\" [readOnly]=\"readOnly\"\n              (error)=\"onError($event)\">\n            </rb-data-table>\n          </ng-container>\n\n        </ng-container> <!--/ngSwitch-groupType-->\n\n      </ng-container> <!--groups-->\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    AngularFormsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: TranslateService, },
    ]; };
    AngularFormsComponent.propDecorators = {
        "groups": [{ type: Input },],
        "data": [{ type: Input },],
        "lang": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "error": [{ type: Output },],
        "ready": [{ type: Output },],
    };
    return AngularFormsComponent;
}());
export { AngularFormsComponent };
//# sourceMappingURL=angular-forms.component.js.map