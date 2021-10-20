import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'project-details-component',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public project : Project;
  public invert: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {this.project = data.project});
  }

  public getBool(): boolean {
    return this.invert;
  }

  public invertBool(): boolean{
    this.invert = !this.invert;
    return this.invert;
  }



}
