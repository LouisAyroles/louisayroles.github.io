import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ProjectDetailsComponent} from "./project/project-details.component";
import {ProjectResolver} from "./resolver/project.resolver";

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'project/:id',
    component:ProjectDetailsComponent,
  resolve: {
    project: ProjectResolver
  }}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
