import { DependencyCriteria } from '.';
import { StringUtils } from '../util';
var DependencyService = /** @class */ (function () {
    function DependencyService() {
    }
    DependencyService.hideQuestion = function (question, formGroup) {
        if (!question.dependencies || 0 === question.dependencies.length) {
            return false;
        }
        for (var _i = 0, _a = question.dependencies; _i < _a.length; _i++) {
            var dependency = _a[_i];
            if (!formGroup.get(dependency.code)) {
                continue;
            }
            var answerDependency = formGroup.get(dependency.code).value;
            var result = DependencyService.executeOperation(answerDependency, dependency);
            if (!result) {
                DependencyService.setStatusFormControl(formGroup.get(question.name), true);
                return true;
            }
        }
        DependencyService.setStatusFormControl(formGroup.get(question.name), false);
        return false;
    };
    DependencyService.executeOperation = function (answerDependency, dependency) {
        switch (dependency.criteria) {
            case DependencyCriteria.EQUALS:
                return StringUtils.convertToString(answerDependency) === StringUtils.convertToString(dependency.expectedAnswer);
            case DependencyCriteria.LESS_THAN:
                return parseFloat(answerDependency) < parseFloat(dependency.expectedAnswer);
            case DependencyCriteria.GREATER_THAN:
                return parseFloat(answerDependency) > parseFloat(dependency.expectedAnswer);
            case DependencyCriteria.NOT_EQUALS:
                return StringUtils.convertToString(answerDependency) !== StringUtils.convertToString(dependency.expectedAnswer);
        }
        return false;
    };
    DependencyService.setStatusFormControl = function (formControl, hidden) {
        if (hidden) {
            formControl.disable();
        }
        else {
            formControl.enable();
        }
    };
    return DependencyService;
}());
export { DependencyService };
//# sourceMappingURL=dependency.service.js.map