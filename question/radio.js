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
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(name, description, dependencies, answer, validations, disabled, options, defaultOption) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = null; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (options === void 0) { options = []; }
        if (defaultOption === void 0) { defaultOption = null; }
        return _super.call(this, name, description, QuestionType.RADIO, dependencies, answer, validations, disabled, options, defaultOption) || this;
    }
    Radio.fromJson = function (question) {
        return new Radio(question.name, question.description, question.dependencies, question.answer, ValidationFactory.createValidationList(question.validations), question.disabled, question.options, question.defaultOption);
    };
    return Radio;
}(Choice));
export { Radio };
//# sourceMappingURL=radio.js.map