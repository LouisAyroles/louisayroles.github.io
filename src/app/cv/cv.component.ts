import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

}
