import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Project} from "../project";
import {PROJECTS} from "../mock-projects";
import {NavigationStart, Router} from "@angular/router";


@Component({
    selector: 'navbar-app',
    templateUrl: `./navbar.component.html`,
    styleUrls: [`./navbar.scss`]
})


export class NavbarComponent implements OnInit {

  public projects: Project[];

  component = 'default';
  inverseColor = false;
  isUnderlined = '';

  constructor(
    private router: Router,
  ) {
    // subscribe to router navigation
    this.router.events.subscribe(event => {
      // filter `NavigationEnd` events
      if (event instanceof NavigationStart) {
        this.inverseColor = (event.url === '/contact') || (event.url ==='/hobbies') || event.url.startsWith('/project');
        this.isUnderlined = event.url;
        console.log(event.url);
      }
    });
  }

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
