import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class AngularFormsTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any>;
}
