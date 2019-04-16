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
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { GroupType } from '../group';
import { RequiredValidator, EmailValidator, MaxValidator, MinValidator, MaxLengthValidator, MinLengthValidator, PatternValidator } from '../chain-of-responsibility/validator-factory';
var ReactiveFormsFactory = /** @class */ (function () {
    function ReactiveFormsFactory() {
    }
    ReactiveFormsFactory.createFormGroupFromGroups = function (groups) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var formGroup, _i, _a, group, control, _b, _c, error_1;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 10, , 11]);
                                    formGroup = new FormGroup({});
                                    _i = 0;
                                    return [4 /*yield*/, Promise.all(groups)];
                                case 1:
                                    _a = _d.sent();
                                    _d.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                                    group = _a[_i];
                                    control = void 0;
                                    if (!(GroupType.FIELDSET === group.type)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, ReactiveFormsFactory.createFormGroupFromQuestions(group.questions)];
                                case 3:
                                    control = _d.sent();
                                    return [3 /*break*/, 7];
                                case 4: return [4 /*yield*/, ReactiveFormsFactory.createFormArrayFromQuestions(group.questions.slice(1))];
                                case 5:
                                    control = _d.sent();
                                    if (!(group.validations && 0 < group.validations.length)) return [3 /*break*/, 7];
                                    _c = (_b = control).setValidators;
                                    return [4 /*yield*/, ReactiveFormsFactory.createValidators(group.validations)];
                                case 6:
                                    _c.apply(_b, [_d.sent()]);
                                    _d.label = 7;
                                case 7:
                                    formGroup.addControl(group.code, control);
                                    _d.label = 8;
                                case 8:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 9:
                                    resolve(formGroup);
                                    return [3 /*break*/, 11];
                                case 10:
                                    error_1 = _d.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 11];
                                case 11: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ReactiveFormsFactory.createFormGroupFromQuestions = function (questions, checkDisabledQuestions) {
        if (checkDisabledQuestions === void 0) { checkDisabledQuestions = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var formGroup, _i, _a, question, validators, answer, formState, control, _b, _c, error_2;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 8, , 9]);
                                    formGroup = new FormGroup({});
                                    _i = 0;
                                    return [4 /*yield*/, Promise.all(questions)];
                                case 1:
                                    _a = _d.sent();
                                    _d.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                                    question = _a[_i];
                                    return [4 /*yield*/, ReactiveFormsFactory.createValidators(question.validations)];
                                case 3:
                                    validators = _d.sent();
                                    answer = !question.answer && question.defaultOption ? question.defaultOption : question.answer;
                                    formState = { value: answer, disabled: checkDisabledQuestions && question.disabled };
                                    control = new FormControl(formState, validators);
                                    if (!(question.validations && 0 < question.validations.length)) return [3 /*break*/, 5];
                                    _c = (_b = control).setValidators;
                                    return [4 /*yield*/, ReactiveFormsFactory.createValidators(question.validations)];
                                case 4:
                                    _c.apply(_b, [_d.sent()]);
                                    _d.label = 5;
                                case 5:
                                    formGroup.addControl(question.name, control);
                                    _d.label = 6;
                                case 6:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 7:
                                    resolve(formGroup);
                                    return [3 /*break*/, 9];
                                case 8:
                                    error_2 = _d.sent();
                                    reject(error_2);
                                    return [3 /*break*/, 9];
                                case 9: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ReactiveFormsFactory.createFormArrayFromQuestions = function (questions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var formArray, _i, _a, question, group, _b, question_1, column, error_3;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 5, , 6]);
                                    formArray = new FormArray([]);
                                    _i = 0;
                                    return [4 /*yield*/, Promise.all(questions)];
                                case 1:
                                    _a = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    question = _a[_i];
                                    group = new FormGroup({});
                                    for (_b = 0, question_1 = question; _b < question_1.length; _b++) {
                                        column = question_1[_b];
                                        group.addControl(column.name, new FormControl(column.answer));
                                    }
                                    formArray.push(group);
                                    _c.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 4:
                                    resolve(formArray);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_3 = _c.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ReactiveFormsFactory.createValidators = function (validations) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var validators, _i, _a, validation, validatorFactoryHandler, validatorFn, error_4;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 5, , 6]);
                                    validators = [];
                                    _i = 0;
                                    return [4 /*yield*/, Promise.all(validations)];
                                case 1:
                                    _a = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    validation = _a[_i];
                                    validatorFactoryHandler = (new RequiredValidator())
                                        .append(new EmailValidator())
                                        .append(new MaxValidator())
                                        .append(new MinValidator())
                                        .append(new MaxLengthValidator())
                                        .append(new MinLengthValidator())
                                        .append(new PatternValidator());
                                    validatorFn = validatorFactoryHandler.handle(validation);
                                    validators.push(validatorFn);
                                    _b.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 4:
                                    resolve(validators);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_4 = _b.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ReactiveFormsFactory;
}());
export { ReactiveFormsFactory };
//# sourceMappingURL=reactive-forms-factory.js.map