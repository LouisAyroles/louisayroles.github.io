import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Education} from "../../domain/education";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss'],
  imports: [TranslateModule, NgIf, NgForOf]
})
export class DiplomaComponent implements OnInit {

  @Input() diploma: Education
  public mobileView: Boolean
  public tabletView: Boolean

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileView = window.innerWidth <= 425;
    this.tabletView = window.innerWidth <= 768 && window.innerWidth > 425;
  }
}
