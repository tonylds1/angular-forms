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
var MinLengthValidator = /** @class */ (function (_super) {
    __extends(MinLengthValidator, _super);
    function MinLengthValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinLengthValidator.prototype.handle = function (validation) {
        if (ValidationType.MIN_LENGTH === validation.type) {
            return (new ValidatorFactory(validation)).createMinLengthValidator();
        }
        return _super.prototype.handle.call(this, validation);
    };
    return MinLengthValidator;
}(ValidatorFactoryHandler));
export { MinLengthValidator };
//# sourceMappingURL=min-length-validator.js.map