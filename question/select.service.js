var SelectService = /** @class */ (function () {
    function SelectService() {
    }
    SelectService.onChangeOption = function (htmlFormControl, formControl, question) {
        if (htmlFormControl.value === question.editableOption) {
            formControl.setValue(null);
            htmlFormControl.value = question.editableOption;
        }
    };
    return SelectService;
}());
export { SelectService };
//# sourceMappingURL=select.service.js.map