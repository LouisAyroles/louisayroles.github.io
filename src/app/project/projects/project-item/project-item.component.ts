import {Component, Input, OnInit, HostListener} from '@angular/core';
import {Project} from "../../../domain/project";


@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    standalone: false
})
export class ProjectItemComponent implements OnInit {

  @Input()
  project: Project;
  invert: boolean;
  public mobileView: boolean;
  public tabletView: boolean;


  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
   this.mobileView = window.innerWidth <= 425;
   this.tabletView = window.innerWidth <= 768 && window.innerWidth > 425;
}


  ngOnInit(): void {
    this.invert = (this.project.id%2)===0;
  }

  public getBool(): boolean {
    return this.invert;
  }

  public invertBool(): boolean{
    return !this.invert;
  }
}
