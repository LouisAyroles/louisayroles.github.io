import {Component, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
  imports: [TranslateModule, NgIf]
})
export class HobbiesComponent implements OnInit {

  public isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
