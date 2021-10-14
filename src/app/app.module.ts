import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {ProjectsComponent} from "./projects/projects.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailsComponent } from './project/project-details.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports: [BrowserModule,
  RouterModule,
  AppRoutingModule],
  declarations: [ AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    HomepageComponent,
    ProjectDetailsComponent,
    CvComponent,
    ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
