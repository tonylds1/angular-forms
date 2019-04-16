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
import { Fieldset } from '../group';
var FieldsetBuilder = /** @class */ (function (_super) {
    __extends(FieldsetBuilder, _super);
    function FieldsetBuilder(code, title, description) {
        var _this = _super.call(this, code, title, description) || this;
        _this.questions = [];
        return _this;
    }
    FieldsetBuilder.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    FieldsetBuilder.prototype.build = function () {
        return new Fieldset(this.code, this.title, this.questions, this.description);
    };
    return FieldsetBuilder;
}(GroupBuilder));
export { FieldsetBuilder };
//# sourceMappingURL=fieldset-builder.js.map