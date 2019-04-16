var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Question, QuestionType } from '.';
import { ValidationFactory } from '../factory';
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(name, description, dependencies, answer, validations, disabled, _defaultOption) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = false; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (_defaultOption === void 0) { _defaultOption = null; }
        var _this = _super.call(this, name, description, QuestionType.CHECKBOX, dependencies, answer || false, validations, disabled) || this;
        _this._defaultOption = _defaultOption;
        return _this;
    }
    Checkbox.fromJson = function (question) {
        return new Checkbox(question.name, question.description, question.dependencies, 'true' === String(question.answer), ValidationFactory.createValidationList(question.validations), 'true' === String(question.defaultOption));
    };
    Object.defineProperty(Checkbox.prototype, "defaultOption", {
        get: function () {
            return this._defaultOption;
        },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}(Question));
export { Checkbox };
//# sourceMappingURL=checkbox.js.map