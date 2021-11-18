import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'portfolio-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    AOS.init(
      {duration: 1300,
      }
    );
  }
}
