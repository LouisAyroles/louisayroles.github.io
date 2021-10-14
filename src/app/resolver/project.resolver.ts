import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProjectService} from "../project.service";
import {Observable} from "rxjs";
import {Project} from "../project";

@Injectable(
  {providedIn: 'root'}
)
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Project> {
    return this.projectService.getProjectById(route.paramMap.get('id'));
  }
}
