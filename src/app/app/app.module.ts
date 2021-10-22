import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  imports: [BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule, ProjectModule, FontAwesomeModule],
  declarations: [ AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CvComponent,
    ContactComponent,
    HobbiesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
