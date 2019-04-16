import { ValidationType } from '.';
var Validation = /** @class */ (function () {
    function Validation(_type, _message) {
        this._type = _type;
        this._message = _message;
    }
    Validation.prototype.isRequired = function () {
        return ValidationType.REQUIRED === this._type;
    };
    Object.defineProperty(Validation.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return Validation;
}());
export { Validation };
//# sourceMappingURL=validation.js.map