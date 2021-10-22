import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectModule { }
