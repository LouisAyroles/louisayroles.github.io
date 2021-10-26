import {Component, Input, OnInit, HostListener} from '@angular/core';
import {Project} from "../../../domain/project";


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  project: Project;
  invert: boolean;
  public mobileView: boolean;


  constructor() {    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.mobileView = window.innerWidth <= 768;
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
