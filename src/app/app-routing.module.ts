import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ProjectDetailsComponent} from "./project/project-details.component";
import {ProjectResolver} from "./resolver/project.resolver";
import {CvComponent} from "./cv/cv.component";
import {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent},
  {
    path: 'project/:id',
    component:ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }},
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
