import { QuestionType, Text, TextArea, Checkbox, Radio, Select } from '../question';
var QuestionFactory = /** @class */ (function () {
    function QuestionFactory() {
    }
    QuestionFactory.createQuestion = function (question) {
        switch (question.type) {
            case QuestionType.CHECKBOX:
                return Checkbox.fromJson(question);
            case QuestionType.RADIO:
                return Radio.fromJson(question);
            case QuestionType.SELECT:
                return Select.fromJson(question);
            case QuestionType.TEXTAREA:
                return TextArea.fromJson(question);
            default:
                return Text.fromJson(question);
        }
    };
    QuestionFactory.createQuestionList = function (questionList) {
        return questionList.map(function (question) { return QuestionFactory.createQuestion(question); });
    };
    return QuestionFactory;
}());
export { QuestionFactory };
//# sourceMappingURL=question-factory.js.map