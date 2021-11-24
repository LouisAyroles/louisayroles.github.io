import { Component, HostListener, OnInit } from '@angular/core';
import {Project} from "../domain/project";
import {PROJECTS_FR} from "../domain/mock-projects";
import {PROJECTS_EN} from "../domain/mock-project-en";
import {NavigationStart, Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {ProjectService} from "../project/project.service";


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
    public translate: TranslateService,
    public projectService : ProjectService
  ) {
    this.onResize();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.inverseColor = (event.url === '/contact') || (event.url ==='/hobbies') || event.url.startsWith('/project');
        this.isUnderlined = event.url;
      }
    });
  }



  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


    ngOnInit(){
      this.projects = PROJECTS_FR;
    }

    public getProItems() : Project[]{
      return this.projects.filter((item) => item.type === 2);
    }

  public getPersoItems() : Project[] {
    return this.projects.filter((item) => item.type === 1);
  }

  switchToFrench(){
    this.translate.use('fr');
    this.projectService.setProject(PROJECTS_FR);
  }

  switchToEnglish(){
    this.translate.use('en');
    this.projectService.setProject(PROJECTS_EN);
    console.log(this.projectService.project);
  }
}
