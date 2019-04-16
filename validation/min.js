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
var Min = /** @class */ (function (_super) {
    __extends(Min, _super);
    function Min(message, _value) {
        var _this = _super.call(this, ValidationType.MIN, message) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(Min.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Min;
}(Validation));
export { Min };
//# sourceMappingURL=min.js.map