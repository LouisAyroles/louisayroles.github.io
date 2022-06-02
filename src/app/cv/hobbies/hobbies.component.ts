import {Component, Input, OnInit} from '@angular/core';
import {Hobie} from "../../domain/hobie";

@Component({
  selector: 'app-cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  @Input()
  hobie : Hobie;
  constructor() { }

  ngOnInit(): void {
  }

}
