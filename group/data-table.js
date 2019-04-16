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
import { Group, GroupType } from '.';
import { ValidationType } from '../validation';
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable(code, title, questions, _validations, description) {
        if (_validations === void 0) { _validations = []; }
        var _this = _super.call(this, code, title, GroupType.DATATABLE, questions, description) || this;
        _this._validations = _validations;
        return _this;
    }
    DataTable.prototype.getQuestionByName = function (name) {
        for (var _i = 0, _a = this._questions[0]; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.name === name) {
                return question;
            }
        }
    };
    DataTable.prototype.isRequired = function () {
        for (var _i = 0, _a = this._validations; _i < _a.length; _i++) {
            var validation = _a[_i];
            if (ValidationType.REQUIRED === validation.type) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(DataTable.prototype, "validations", {
        get: function () {
            return this._validations;
        },
        enumerable: true,
        configurable: true
    });
    return DataTable;
}(Group));
export { DataTable };
//# sourceMappingURL=data-table.js.map