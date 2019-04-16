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
var MaxLength = /** @class */ (function (_super) {
    __extends(MaxLength, _super);
    function MaxLength(message, _value) {
        var _this = _super.call(this, ValidationType.MAX_LENGTH, message) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(MaxLength.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return MaxLength;
}(Validation));
export { MaxLength };
//# sourceMappingURL=max-length.js.map