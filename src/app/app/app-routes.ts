import {Routes} from '@angular/router';
import {HomepageComponent} from "../homepage/homepage.component";
import {ProjectDetailsComponent} from "../project/project-details/project-details.component";
import {ProjectResolver} from "../resolver/project.resolver";
import {CvComponent} from "../cv/cv.component";
import {ContactComponent} from "../contact/contact.component";
import {HobbiesComponent} from "../hobbies/hobbies.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  }
]
