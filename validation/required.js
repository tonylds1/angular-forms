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
var Required = /** @class */ (function (_super) {
    __extends(Required, _super);
    function Required(message, _requiredTrue) {
        if (_requiredTrue === void 0) { _requiredTrue = false; }
        var _this = _super.call(this, ValidationType.REQUIRED, message) || this;
        _this._requiredTrue = _requiredTrue;
        return _this;
    }
    Object.defineProperty(Required.prototype, "requiredTrue", {
        get: function () {
            return this._requiredTrue;
        },
        enumerable: true,
        configurable: true
    });
    return Required;
}(Validation));
export { Required };
//# sourceMappingURL=required.js.map