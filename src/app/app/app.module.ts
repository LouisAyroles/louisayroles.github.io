import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient, HttpBackend} from '@angular/common/http';

import { AppComponent }  from './app.component';
import {HeaderComponent} from "../header/header.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomepageComponent } from '../homepage/homepage.component';
import { CvComponent } from '../cv/cv.component';
import { ContactComponent } from '../contact/contact.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import {ProjectModule} from "../project/project.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";
import { ToastComponent } from './toast/toast.component';
import {NgbToastModule} from "@ng-bootstrap/ng-bootstrap";
import { CloseMenuDirective } from './close-menu.directive';
import {NgApexchartsModule} from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
import {CvModule} from "../cv/cv.module";
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import {ThemeToggleComponent} from "../dark-mode/theme-toggle/theme-toggle.component";
import {FloatingButtonComponent} from "./floating-button/floating-button.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
    providers: [
      {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    NgChartsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    ProjectModule,
    FontAwesomeModule,
    FormsModule,
    NgbToastModule,
    CvModule,
    FloatingButtonComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CvComponent,
    ContactComponent,
    HobbiesComponent,
    ToastComponent,
    CloseMenuDirective,
    ThemeToggleComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
