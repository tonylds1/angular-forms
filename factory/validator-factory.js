import { Validators } from '@angular/forms';
var ValidatorFactory = /** @class */ (function () {
    function ValidatorFactory(validation) {
        this.validation = validation;
    }
    ValidatorFactory.prototype.createEmailValidator = function () {
        return Validators.email;
    };
    ValidatorFactory.prototype.createMaxValidator = function () {
        return Validators.max(this.validation.value);
    };
    ValidatorFactory.prototype.createMinValidator = function () {
        return Validators.min(this.validation.value);
    };
    ValidatorFactory.prototype.createMaxLengthValidator = function () {
        return Validators.maxLength(this.validation.value);
    };
    ValidatorFactory.prototype.createMinLengthValidator = function () {
        return Validators.minLength(this.validation.value);
    };
    ValidatorFactory.prototype.createPatternValidator = function () {
        var value = this.validation.value;
        if (value.startsWith('/')) {
            var valuePattern = /\/(.*)\/([gim]+)?/;
            var pattern = value.replace(valuePattern, '$1');
            var flags = value.replace(valuePattern, '$2');
            return Validators.pattern(new RegExp(pattern, flags));
        }
        return Validators.pattern(value);
    };
    ValidatorFactory.prototype.createRequiredValidator = function () {
        return !this.validation.requiredTrue ? Validators.required : Validators.requiredTrue;
    };
    return ValidatorFactory;
}());
export { ValidatorFactory };
//# sourceMappingURL=validator-factory.js.map