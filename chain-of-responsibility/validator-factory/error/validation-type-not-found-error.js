var ValidationTypeNotFoundError = /** @class */ (function () {
    function ValidationTypeNotFoundError(_message) {
        if (_message === void 0) { _message = 'Validation Type not found.'; }
        this._message = _message;
        this._name = 'ValidationTypeNotFoundError';
    }
    Object.defineProperty(ValidationTypeNotFoundError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationTypeNotFoundError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return ValidationTypeNotFoundError;
}());
export { ValidationTypeNotFoundError };
//# sourceMappingURL=validation-type-not-found-error.js.map