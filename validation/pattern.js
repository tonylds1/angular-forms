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
import { Validation, ValidationType } from '.';
var Pattern = /** @class */ (function (_super) {
    __extends(Pattern, _super);
    function Pattern(message, _value) {
        var _this = _super.call(this, ValidationType.PATTERN, message) || this;
        _this._value = _value;
        return _this;
    }
    /** @override */
    /** @override */
    Pattern.prototype.isRequired = /** @override */
    function () {
        return ValidationType.PATTERN === this.type && 'true' === this._value.toString();
    };
    Object.defineProperty(Pattern.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Pattern;
}(Validation));
export { Pattern };
//# sourceMappingURL=pattern.js.map