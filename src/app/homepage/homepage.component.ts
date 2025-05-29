import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
  imports: [HeaderComponent]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
