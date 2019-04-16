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
import { ValidatorFactoryHandler } from '.';
import { ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';
var MaxValidator = /** @class */ (function (_super) {
    __extends(MaxValidator, _super);
    function MaxValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaxValidator.prototype.handle = function (validation) {
        if (ValidationType.MAX === validation.type) {
            return (new ValidatorFactory(validation)).createMaxValidator();
        }
        return _super.prototype.handle.call(this, validation);
    };
    return MaxValidator;
}(ValidatorFactoryHandler));
export { MaxValidator };
//# sourceMappingURL=max-validator.js.map