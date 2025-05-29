import {Component, OnInit} from '@angular/core';
import {Project} from "../../domain/project";
import {ActivatedRoute} from "@angular/router";
import {HostListener} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'project-details-component',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  imports: [TranslateModule, NgIf, NgForOf]
})
export class ProjectDetailsComponent implements OnInit {

  public project: Project;
  public mobileView: boolean = false;
  public isLoading: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileView = window.innerWidth <= 768;
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.project = data.project
    });
  }

  mobileDescription(i: number): boolean {
    if (this.mobileView) {
      return true;
    }
    return i % 2 == 1;
  }

  notMobileDescription(i: number): boolean {
    if (this.mobileView) {
      return false;
    }
    return i % 2 == 0;
  }

}
