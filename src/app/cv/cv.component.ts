import {Component, ElementRef, OnInit} from '@angular/core';
import { ViewSDKClient } from '../view-sdk-service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  private pdfURL: string = "http://www.africau.edu/images/default/sample.pdf";

  constructor(
    private viewSDKClient: ViewSDKClient,
    private _elementRef : ElementRef
  ) {
  }

  renderPDf() {
    this.viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      const canvas: any = this._elementRef.nativeElement.querySelector('#pdf-div');
      canvas.style.display = "block";
      let defConfg = {
        // defaultViewMode: "FIT_WIDTH"
      }
      this.viewSDKClient.previewFile('pdf-div', defConfg, this.pdfURL,);
    });
  }

  ngOnInit(): void {
  }

}
