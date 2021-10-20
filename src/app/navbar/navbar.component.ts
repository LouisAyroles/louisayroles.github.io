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

  constructor(
    private router: Router,
  ) {
    // subscribe to router navigation
    this.router.events.subscribe(event => {
      // filter `NavigationEnd` events
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.inverseColor = (event.url === '/contact') || (event.url ==='/hobbies');
        console.log(this.inverseColor)
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
