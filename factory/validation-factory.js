import { Email, Max, MaxLength, Min, MinLength, Pattern, Required, ValidationType } from '../validation';
var ValidationFactory = /** @class */ (function () {
    function ValidationFactory() {
    }
    ValidationFactory.createValidation = function (validation) {
        switch (validation.type) {
            case ValidationType.EMAIL:
                return new Email(validation.message);
            case ValidationType.MAX:
                return new Max(validation.message, validation.value);
            case ValidationType.MAX_LENGTH:
                return new MaxLength(validation.message, validation.value);
            case ValidationType.MIN:
                return new Min(validation.message, validation.value);
            case ValidationType.MIN_LENGTH:
                return new MinLength(validation.message, validation.value);
            case ValidationType.PATTERN:
                return new Pattern(validation.message, validation.value);
            case ValidationType.REQUIRED:
                return new Required(validation.message);
        }
    };
    ValidationFactory.createValidationList = function (validationList) {
        return validationList.map(function (validation) { return ValidationFactory.createValidation(validation); });
    };
    return ValidationFactory;
}());
export { ValidationFactory };
//# sourceMappingURL=validation-factory.js.map