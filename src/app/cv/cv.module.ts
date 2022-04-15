import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiplomaComponent} from "./diploma/diploma.component";
import { WorkComponent } from './work/work.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    DiplomaComponent,
    WorkComponent,
    HobbiesComponent
  ],
  exports: [
    DiplomaComponent,
    WorkComponent,
    WorkComponent,
    HobbiesComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
    ]
})
export class CvModule { }
