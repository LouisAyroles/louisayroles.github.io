import { Component, OnInit, HostListener } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: 'header-app',
    templateUrl: `./header.component.html`,
    styleUrls: [`./header.scss`]
})
export class HeaderComponent implements OnInit {

  public mobileView: boolean;

  constructor(private translateService : TranslateService) {
    this.onResize();
  }

  downloadPdf() {
    const pdfUrl = this.translateService.currentLang === 'en'? 'assets/cv/CV_EN_AYROLES_LOUIS.pdf' : 'assets/cv/CV_AYROLES_LOUIS.pdf';
    window.open(pdfUrl, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.mobileView = window.innerWidth <= 768;
}

    ngOnInit(){
    }
}
