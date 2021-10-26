import { Component, HostListener, OnInit } from '@angular/core';
import {Project} from "../domain/project";
import {PROJECTS} from "../domain/mock-projects";
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
  public isCollapsed = true;
  public navbarOpen = false;
  public mobileView: boolean;


  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.mobileView = window.innerWidth <= 425;
}
  constructor(
    private router: Router,
  ) {
    this.onResize();
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



  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
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
