import {Injectable, OnInit} from '@angular/core';
import {Project} from "../domain/project";
import {PROJECTS_FR} from "../domain/datas";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public project : Project[];

  constructor() {
    this.project = PROJECTS_FR;
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

  public getAllProjects(): Project[]{
    return this.project;
  }

  public setProject(project: Project[]){
    this.project = project;
  }
}
