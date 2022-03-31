import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Experience} from "../../domain/experience";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @Input()
  work : Experience

  public mobileView : boolean
  public tabletView : boolean

  constructor(public translate : TranslateService) {

  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
    this.mobileView = window.innerWidth <= 425;
    this.tabletView = window.innerWidth <= 768 && window.innerWidth > 425;
  }
}
