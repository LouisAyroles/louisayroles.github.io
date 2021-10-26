import { Component, OnInit, HostListener } from '@angular/core';


@Component({
    selector: 'header-app',
    templateUrl: `./header.component.html`,
    styleUrls: [`./header.scss`]
})
export class HeaderComponent implements OnInit {

  public mobileView: boolean;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
   this.mobileView = window.innerWidth <= 768;
}

    ngOnInit(){
    }
}
