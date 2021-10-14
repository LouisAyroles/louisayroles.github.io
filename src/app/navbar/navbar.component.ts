import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Project, Type} from "../project";
import {PROJECTS} from "../mock-projects";


@Component({
    selector: 'navbar-app',
    templateUrl: `./navbar.component.html`,
    styleUrls: [`./navbar.scss`]
})


export class NavbarComponent implements OnInit {

  public projects: Project[];

    ngOnInit(){
      this.projects = PROJECTS;
    }

    public getProItems() : Project[]{
      return this.projects.filter((item) => item.type === 2);
    }

  public getPersoItems() : Project[] {
    return this.projects.filter((item) => item.type === 1);
  }
}
