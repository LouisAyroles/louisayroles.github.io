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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {this.project = data.project});
  }



}
