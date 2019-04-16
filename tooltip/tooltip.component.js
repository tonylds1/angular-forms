import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.control = new FormControl();
        this.submitted = false;
    }
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rb-tooltip',
                    template: "\n    <div class=\"tooltip top\" role=\"tooltip\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">\n        {{tooltip}}\n      </div>\n    </div>",
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.propDecorators = {
        "control": [{ type: Input },],
        "submitted": [{ type: Input },],
        "tooltip": [{ type: Input },],
    };
    return TooltipComponent;
}());
export { TooltipComponent };
//# sourceMappingURL=tooltip.component.js.map