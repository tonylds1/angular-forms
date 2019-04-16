var Question = /** @class */ (function () {
    function Question(_name, _description, _type, _dependencies, _answer, _validations, _disabled) {
        if (_dependencies === void 0) { _dependencies = []; }
        if (_answer === void 0) { _answer = null; }
        if (_validations === void 0) { _validations = []; }
        if (_disabled === void 0) { _disabled = false; }
        this._name = _name;
        this._description = _description;
        this._type = _type;
        this._dependencies = _dependencies;
        this._answer = _answer;
        this._validations = _validations;
        this._disabled = _disabled;
    }
    Question.prototype.isRequired = function () {
        for (var _i = 0, _a = this._validations; _i < _a.length; _i++) {
            var validation = _a[_i];
            if (validation.isRequired()) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(Question.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "dependencies", {
        get: function () {
            return this._dependencies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "validations", {
        get: function () {
            return this._validations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
export { Question };
//# sourceMappingURL=question.js.map