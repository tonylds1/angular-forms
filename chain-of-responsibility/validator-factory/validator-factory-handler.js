import { ValidationTypeNotFoundError } from './error';
var ValidatorFactoryHandler = /** @class */ (function () {
    function ValidatorFactoryHandler() {
    }
    ValidatorFactoryHandler.prototype.append = function (handler) {
        if (this.nextHandler) {
            this.nextHandler.append(handler);
        }
        else {
            this.nextHandler = handler;
        }
        return this;
    };
    ValidatorFactoryHandler.prototype.handle = function (validation) {
        if (this.nextHandler) {
            return this.nextHandler.handle(validation);
        }
        throw new ValidationTypeNotFoundError("Validation Type (" + validation.type + ") not found.");
    };
    return ValidatorFactoryHandler;
}());
export { ValidatorFactoryHandler };
//# sourceMappingURL=validator-factory-handler.js.map