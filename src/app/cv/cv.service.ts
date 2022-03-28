import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Education} from "../domain/education";
import {EDUCATION} from "../domain/mock-education";
import {Experience} from "../domain/experience";
import {EXPERIENCE} from "../domain/mock-experience";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public education: Education[];
  public experience: Experience[];

  constructor() {
    this.education = EDUCATION;
    this.experience = EXPERIENCE
  }


  public getEducationById(index: string | null): Observable<Education> {
    if (index == null) {
      return of();
    }
    const educationFind = this.education.find(education => education.id == parseInt(index));
    if (educationFind == null) {
      return of();
    }
    return of(educationFind);
  }

  public getAllEducation(): Education[] {
    return this.education;
  }

  public setEducation(education: Education[]) {
    this.education = education;
  }

  public getExperienceById(index: string | null): Observable<Experience> {
    if (index == null) {
      return of();
    }
    const experienceFind = this.experience.find(experience => experience.id == parseInt(index));
    if (experienceFind == null) {
      return of();
    }
    return of(experienceFind);
  }

  public getAllExperience(): Experience[] {
    return this.experience;
  }

  public setExperience(experience: Experience[]) {
    this.experience = experience;
  }
}
