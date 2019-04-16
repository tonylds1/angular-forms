import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var i18n = {
    'en-US': {
        'ACTION': 'Action',
        'ADD': 'Add',
        'NO_REGISTERS': 'No registers',
        'NOT_INFORMED': 'Not informed',
        'REMOVE': 'Remove'
    },
    'pt-BR': {
        'ACTION': 'Ação',
        'ADD': 'Adicionar',
        'NO_REGISTERS': 'Nenhum registro encontrado',
        'NOT_INFORMED': 'Não informado(a)',
        'REMOVE': 'Remover'
    }
};
var AngularFormsTranslateLoader = /** @class */ (function () {
    function AngularFormsTranslateLoader() {
    }
    AngularFormsTranslateLoader.prototype.getTranslation = function (lang) {
        return Observable.of(i18n[lang]);
    };
    return AngularFormsTranslateLoader;
}());
export { AngularFormsTranslateLoader };
//# sourceMappingURL=angular-forms-translate-loader.js.map