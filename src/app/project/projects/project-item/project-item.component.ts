import {Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.invert = (this.project.id%2)===0;
  }

  public getBool(): boolean {
    return this.invert;
  }

  public invertBool(): boolean{
    this.invert = !this.invert;
    return this.invert;
  }
}
