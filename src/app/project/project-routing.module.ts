import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectDetailsComponent} from "./project-details/project-details.component";

const projectRoutes: Routes = [{
  path: 'project/:id', component: ProjectDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(projectRoutes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
