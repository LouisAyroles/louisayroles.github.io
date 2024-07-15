import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../dark-mode/theme.service";

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss'
})
export class FloatingButtonComponent {

  french : boolean;
  english : boolean;
  mooned : boolean = true;
  theme: string = 'bootstrap-dark';

  constructor(private translateService : TranslateService,
              private themeService: ThemeService) {
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

  toggleMoon() {
    this.mooned = !this.mooned;
    if (this.theme === 'bootstrap') {
      this.theme = 'bootstrap-dark';
    } else  {
      this.theme = 'bootstrap';
    }
    this.themeService.setTheme(this.theme)
  }
}
