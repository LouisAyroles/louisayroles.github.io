import {Component, Input, OnInit} from '@angular/core';
import {Hobie} from "../../domain/hobie";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [
    TranslateModule
  ]
})
export class HobbiesComponent implements OnInit {

  @Input()
  hobie: Hobie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
