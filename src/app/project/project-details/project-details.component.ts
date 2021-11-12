import { Component, OnInit} from '@angular/core';
import {Project} from "../../domain/project";
import {ActivatedRoute} from "@angular/router";
import { HostListener } from "@angular/core";

@Component({
  selector: 'project-details-component',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public project : Project;
  public invert: boolean = true;
  public mobileView: boolean = false;
  public isLoading: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.mobileView = window.innerWidth <= 768;
}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {this.project = data.project});
  }

  public getBool(): boolean {
    if(this.mobileView){
      return false
    }
    return this.invert;
  }

  public getBool2(): boolean {
    if(this.mobileView){
      return true
    }
    return this.invert;
  }

  public invertBool(): boolean{
    if(this.mobileView){
      return true
    }
    this.invert = !this.invert;
    return this.invert;
  }



}
