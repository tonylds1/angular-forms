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
import { Choice, QuestionType } from '.';
import { ValidationFactory } from '../factory';
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(name, description, dependencies, answer, validations, disabled, options, defaultOption, _editableOption, _placeholder) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = null; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (options === void 0) { options = []; }
        if (defaultOption === void 0) { defaultOption = null; }
        if (_editableOption === void 0) { _editableOption = null; }
        if (_placeholder === void 0) { _placeholder = null; }
        var _this = _super.call(this, name, description, QuestionType.SELECT, dependencies, answer, validations, disabled, options, defaultOption) || this;
        _this._editableOption = _editableOption;
        _this._placeholder = _placeholder;
        return _this;
    }
    Select.fromJson = function (question) {
        return new Select(question.name, question.description, question.dependencies, question.answer, ValidationFactory.createValidationList(question.validations), question.disabled, question.options, question.defaultOption, question.editableOption, question.placeholder);
    };
    Object.defineProperty(Select.prototype, "editableOption", {
        get: function () {
            return this._editableOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        enumerable: true,
        configurable: true
    });
    return Select;
}(Choice));
export { Select };
//# sourceMappingURL=select.js.map