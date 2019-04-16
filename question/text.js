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
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(name, description, dependencies, answer, validations, disabled, _mask, _placeholder, _tooltip) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = null; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (_mask === void 0) { _mask = null; }
        if (_placeholder === void 0) { _placeholder = null; }
        if (_tooltip === void 0) { _tooltip = null; }
        var _this = _super.call(this, name, description, QuestionType.TEXT, dependencies, answer, validations, disabled) || this;
        _this._mask = _mask;
        _this._placeholder = _placeholder;
        _this._tooltip = _tooltip;
        return _this;
    }
    Text.fromJson = function (question) {
        return new Text(question.name, question.description, question.dependencies, question.answer, ValidationFactory.createValidationList(question.validations), question.disabled, question.mask, question.placeholder, question.tooltip);
    };
    Object.defineProperty(Text.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "tooltip", {
        get: function () {
            return this._tooltip;
        },
        enumerable: true,
        configurable: true
    });
    return Text;
}(Question));
export { Text };
//# sourceMappingURL=text.js.map