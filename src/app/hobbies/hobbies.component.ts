import {Component, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";


@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
  imports: [TranslateModule]
})
export class HobbiesComponent implements OnInit {

  public isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
