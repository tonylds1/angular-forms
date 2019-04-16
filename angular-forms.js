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
import { FieldsetBuilder, DataTableBuilder } from './builder';
import { GroupType } from './group';
import { QuestionFactory } from './factory';
var AngularForms = /** @class */ (function () {
    function AngularForms() {
    }
    AngularForms.fromJson = function (jsonGroups) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var groups, _i, _a, group, groupBuilder, _b, _c, question, error_1;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 9, , 10]);
                                    groups = [];
                                    _i = 0;
                                    return [4 /*yield*/, Promise.all(jsonGroups)];
                                case 1:
                                    _a = _d.sent();
                                    _d.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 8];
                                    group = _a[_i];
                                    groupBuilder = GroupType.FIELDSET === group.type
                                        ? new FieldsetBuilder(group.code, group.title, group.description)
                                        : new DataTableBuilder(group.code, group.title, group.validations, group.description);
                                    _b = 0;
                                    return [4 /*yield*/, Promise.all(group.questions)];
                                case 3:
                                    _c = _d.sent();
                                    _d.label = 4;
                                case 4:
                                    if (!(_b < _c.length)) return [3 /*break*/, 6];
                                    question = _c[_b];
                                    groupBuilder.addQuestion(GroupType.FIELDSET === group.type
                                        ? QuestionFactory.createQuestion(question)
                                        : QuestionFactory.createQuestionList(question));
                                    _d.label = 5;
                                case 5:
                                    _b++;
                                    return [3 /*break*/, 4];
                                case 6:
                                    groups.push(groupBuilder.build());
                                    _d.label = 7;
                                case 7:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 8:
                                    resolve(groups);
                                    return [3 /*break*/, 10];
                                case 9:
                                    error_1 = _d.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 10];
                                case 10: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return AngularForms;
}());
export { AngularForms };
//# sourceMappingURL=angular-forms.js.map