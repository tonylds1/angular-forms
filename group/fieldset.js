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
var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset(code, title, questions, description) {
        return _super.call(this, code, title, GroupType.FIELDSET, questions, description) || this;
    }
    Fieldset.prototype.getQuestionByName = function (name) {
        for (var _i = 0, _a = this._questions; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.name === name) {
                return question;
            }
        }
    };
    return Fieldset;
}(Group));
export { Fieldset };
//# sourceMappingURL=fieldset.js.map