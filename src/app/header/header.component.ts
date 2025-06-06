import {Component, OnInit, HostListener} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../dark-mode/theme.service";


@Component({
  selector: 'header-app',
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.scss`],
  imports: [TranslateModule, RouterLink, NgOptimizedImage]
})
export class HeaderComponent implements OnInit {

  public mobileView: boolean;
  public currentTheme: string;

  constructor(private translateService: TranslateService,
              public themeService: ThemeService) {
    this.onResize();
  }

  downloadPdf() {
    const pdfUrl = this.translateService.currentLang === 'en' ? 'assets/cv/CV_EN_AYROLES_LOUIS.pdf' : 'assets/cv/CV_AYROLES_LOUIS.pdf';
    window.open(pdfUrl, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileView = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.themeService.themeChanges().subscribe(theme => {
      this.currentTheme = theme.newValue;
    })
  }
}
