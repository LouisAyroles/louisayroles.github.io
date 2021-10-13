import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {ProjectsComponent} from "./projects/projects.component";
@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
