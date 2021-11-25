import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as AOS from 'aos';


@Component({
  selector: 'portfolio-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {

  constructor( public translate: TranslateService) {
    this.translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('fr');

    let browserLang = this.translate.getBrowserLang();
    if (browserLang.match( /fr/ )) {
      this.translate.use( 'fr' );
    }
    else if (browserLang.match( /en/ )) {
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
  }
}
