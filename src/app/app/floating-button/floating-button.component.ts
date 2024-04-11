import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss'
})
export class FloatingButtonComponent {

  french : boolean;
  english : boolean;

  constructor(private translateService : TranslateService) {
  }

  switchToFrench(){
    this.translateService.use('fr');
    this.french = true;
    this.english = false;
  }

  switchToEnglish(){
    this.translateService.use('en');
    this.french = false;
    this.english = true;
  }

}
