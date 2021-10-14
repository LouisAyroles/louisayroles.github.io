import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'project-details-component',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnDestroy,OnInit {

  private projectService: ProjectService;
  public project : Project;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {this.project = data.project});
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }



}
