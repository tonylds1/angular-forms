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
import { GroupBuilder } from '.';
import { DataTable } from '../group';
var DataTableBuilder = /** @class */ (function (_super) {
    __extends(DataTableBuilder, _super);
    function DataTableBuilder(code, title, validations, description) {
        if (validations === void 0) { validations = []; }
        var _this = _super.call(this, code, title, description) || this;
        _this.validations = validations;
        _this.questions = [];
        return _this;
    }
    DataTableBuilder.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    DataTableBuilder.prototype.build = function () {
        return new DataTable(this.code, this.title, this.questions, this.validations, this.description);
    };
    return DataTableBuilder;
}(GroupBuilder));
export { DataTableBuilder };
//# sourceMappingURL=data-table-builder.js.map