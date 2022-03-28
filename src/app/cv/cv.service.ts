import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Education} from "../domain/education";
import {Experience} from "../domain/experience";
import {Hobie} from "../domain/hobie";
import {EDUCATION, EXPERIENCE, HOBBIES} from "../domain/datas";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public education: Education[];
  public experience: Experience[];
  public hobbies : Hobie[];

  constructor() {
    this.education = EDUCATION;
    this.experience = EXPERIENCE
    this.hobbies = HOBBIES
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


  public getAllHobbies(): Hobie[] {
    return this.hobbies;
  }
}
