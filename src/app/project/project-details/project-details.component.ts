import {Component, OnInit} from '@angular/core';
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
  public invert: boolean = false;
  public screenHeight: any;
  public screenWidth: any;
  public mobileView: boolean;

  constructor(private route: ActivatedRoute) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
   this.mobileView = this.screenWidth <= 768;
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
