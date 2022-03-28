import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiplomaComponent} from "./diploma/diploma.component";



@NgModule({
  declarations: [
    DiplomaComponent
  ],
  exports: [
    DiplomaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvModule { }
