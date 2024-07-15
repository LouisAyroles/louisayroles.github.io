import {Component, Renderer2} from '@angular/core';
import { OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as AOS from 'aos';
import {ThemeService} from "../dark-mode/theme.service";


@Component({
  selector: 'portfolio-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {

  constructor( private themeService : ThemeService,
               public translate: TranslateService,
               private renderer: Renderer2) {
    this.translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('fr');

    let browserLang = this.translate.getBrowserLang();
    if (browserLang?.match( /fr/ )) {
      this.translate.use( 'fr' );
    }
    else if (browserLang?.match( /en/ )) {
      this.translate.use( 'en' );
    } else {
      this.translate.use( 'fr' );
    }
}

  ngOnInit() {
    AOS.init(
      {duration: 1300,
      }
    );
    this.themeService.themeChanges().subscribe(theme => {
      if (theme.oldValue) {
        this.renderer.removeClass(document.body, theme.oldValue);
      }
      this.renderer.addClass(document.body, theme.newValue);
    })
  }
}
