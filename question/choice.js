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
import { Question } from '.';
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(name, description, type, dependencies, answer, validations, disabled, _options, _defaultOption) {
        if (dependencies === void 0) { dependencies = []; }
        if (answer === void 0) { answer = null; }
        if (validations === void 0) { validations = []; }
        if (disabled === void 0) { disabled = false; }
        if (_options === void 0) { _options = []; }
        if (_defaultOption === void 0) { _defaultOption = null; }
        var _this = _super.call(this, name, description, type, dependencies, (answer && !answer.length ? answer : null), validations, disabled) || this;
        _this._options = _options;
        _this._defaultOption = _defaultOption;
        return _this;
    }
    Object.defineProperty(Choice.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "defaultOption", {
        get: function () {
            return this._defaultOption;
        },
        enumerable: true,
        configurable: true
    });
    return Choice;
}(Question));
export { Choice };
//# sourceMappingURL=choice.js.map