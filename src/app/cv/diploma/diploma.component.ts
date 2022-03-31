import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Education} from "../../domain/education";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {

  @Input() diploma : Education
  public mobileView : Boolean
  public tabletView : Boolean

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
    this.mobileView = window.innerWidth <= 425;
    this.tabletView = window.innerWidth <= 768 && window.innerWidth > 425;
  }
}
