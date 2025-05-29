import { Component, OnInit } from '@angular/core';
import {Project} from "../../../domain/project";
import {ProjectService} from "../../project.service";

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    standalone: false
})
export class ProjectListComponent implements OnInit {

  constructor(
    public projectService : ProjectService
  ) { }

  public projects: Project[];

  ngOnInit(){
    this.projects = this.projectService.project;
  }

}
