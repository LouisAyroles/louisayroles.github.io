import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from './app/app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {appRoutes} from "./app/app/app-routes";
import {TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

if (environment.production) {
  enableProdMode();
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
