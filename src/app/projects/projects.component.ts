import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Project} from "../project";
import {PROJECTS} from "../mock-projects";


@Component({
    selector: 'projects-component',
    templateUrl: `./projects.component.html`,
    styleUrls: [`./projects.scss`]
})
export class ProjectsComponent implements OnInit {

    private projects: Project[] | undefined;

    ngOnInit(){
        this.projects = PROJECTS;
    }
}
