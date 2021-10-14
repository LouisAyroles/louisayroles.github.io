import {Injectable, OnInit} from '@angular/core';
import {Project} from "./project";
import {PROJECTS} from "./mock-projects";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements OnInit{

  private project : Project[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

  public getProjectById(index: string | null): Observable<Project>{
    if(index == null){
      return of();
    }
    var projectFind = this.project.find(project => project.id == parseInt(index));
    if(projectFind == null){
      return of();
    }
    return of(projectFind);
  }
}
