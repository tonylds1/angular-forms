import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaskModule } from '@fagnerlima/ng-mask';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AngularFormsComponent } from '.';
import { DataTableModule } from './data-table';
import { ValidationMessageModule } from './validation-message';
import { AngularFormsTranslateLoader } from './angular-forms-translate-loader';
import { TooltipModule } from './tooltip';
var AngularFormsModule = /** @class */ (function () {
    function AngularFormsModule() {
    }
    AngularFormsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DataTableModule,
                        ValidationMessageModule,
                        TooltipModule,
                        NgMaskModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useClass: AngularFormsTranslateLoader
                            }
                        })
                    ],
                    declarations: [AngularFormsComponent],
                    exports: [AngularFormsComponent]
                },] },
    ];
    return AngularFormsModule;
}());
export { AngularFormsModule };
//# sourceMappingURL=angular-forms.module.js.map