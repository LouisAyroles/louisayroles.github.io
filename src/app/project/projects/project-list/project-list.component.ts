import { Component, OnInit } from '@angular/core';
import {Project} from "../../../domain/project";
import {PROJECTS} from "../../../domain/mock-projects";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  public projects: Project[];

  ngOnInit(){
    this.projects = PROJECTS;
  }

}
