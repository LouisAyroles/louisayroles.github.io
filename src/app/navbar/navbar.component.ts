import { Component, HostListener, OnInit } from '@angular/core';
import {Project} from "../domain/project";
import {PROJECTS_FR} from "../domain/datas";
import {NavigationStart, Router, RouterLink} from "@angular/router";
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'navbar-app',
  templateUrl: `./navbar.component.html`,
  imports: [
    RouterLink,
    TranslateModule,
    NgbCollapse
],
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
  public tabletView: boolean;
  public french: boolean = true;
  public english: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize() {
   this.mobileView = window.innerWidth <= 425;
   this.tabletView = window.innerWidth <= 768 && window.innerWidth > 425;
}
  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    this.onResize();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.inverseColor = (event.url === '/contact') || (event.url ==='/hobbies') || event.url.startsWith('/project') || event.url.startsWith('/cv');
        this.isUnderlined = event.url;
      }
    });
  }

  toggleNavbar() {
    this.isCollapsed = true;
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
    this.french = true;
    this.english = false;
  }

  switchToEnglish(){
    this.translate.use('en');
    this.french = false;
    this.english = true;
  }
}
