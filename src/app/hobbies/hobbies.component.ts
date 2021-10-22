import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  public isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
