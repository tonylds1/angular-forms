import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
var ValidationMessageComponent = /** @class */ (function () {
    function ValidationMessageComponent() {
        this.control = new FormControl();
        this.submitted = false;
        this.validations = [];
    }
    ValidationMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rb-validation-message',
                    template: "\n    <ul class=\"rb-validation-message\" *ngIf=\"submitted || control.touched\">\n      <li *ngFor=\"let validation of validations\" [hidden]=\"!control.hasError(validation.type)\">\n        {{ validation.message }}\n      </li>\n    </ul>\n  ",
                },] },
    ];
    /** @nocollapse */
    ValidationMessageComponent.propDecorators = {
        "control": [{ type: Input },],
        "submitted": [{ type: Input },],
        "validations": [{ type: Input },],
    };
    return ValidationMessageComponent;
}());
export { ValidationMessageComponent };
//# sourceMappingURL=validation-message.component.js.map