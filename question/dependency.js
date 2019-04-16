var Dependency = /** @class */ (function () {
    function Dependency(_code, _criteria, _expectedAnswer) {
        this._code = _code;
        this._criteria = _criteria;
        this._expectedAnswer = _expectedAnswer;
    }
    Object.defineProperty(Dependency.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dependency.prototype, "criteria", {
        get: function () {
            return this._criteria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dependency.prototype, "expectedAnswer", {
        get: function () {
            return this._expectedAnswer;
        },
        enumerable: true,
        configurable: true
    });
    return Dependency;
}());
export { Dependency };
//# sourceMappingURL=dependency.js.map