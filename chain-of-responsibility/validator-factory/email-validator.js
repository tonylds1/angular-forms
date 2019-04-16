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
var EmailValidator = /** @class */ (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailValidator.prototype.handle = function (validation) {
        if (ValidationType.EMAIL === validation.type) {
            return (new ValidatorFactory(validation)).createEmailValidator();
        }
        return _super.prototype.handle.call(this, validation);
    };
    return EmailValidator;
}(ValidatorFactoryHandler));
export { EmailValidator };
//# sourceMappingURL=email-validator.js.map