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
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(name, description, dependencies, answer, validations, disabled, _placeholder) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = null; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (_placeholder === void 0) { _placeholder = null; }
        var _this = _super.call(this, name, description, QuestionType.TEXTAREA, dependencies, answer, validations, disabled) || this;
        _this._placeholder = _placeholder;
        return _this;
    }
    TextArea.fromJson = function (question) {
        return new TextArea(question.name, question.description, question.dependencies, question.answer, ValidationFactory.createValidationList(question.validations), question.disabled, question.placeholder);
    };
    Object.defineProperty(TextArea.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        enumerable: true,
        configurable: true
    });
    return TextArea;
}(Question));
export { TextArea };
//# sourceMappingURL=textarea.js.map