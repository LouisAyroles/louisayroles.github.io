import {Component, OnInit} from '@angular/core';
import emailjs from 'emailjs-com';
import {FormGroup, FormsModule} from "@angular/forms";
import {Email} from "../domain/email";
import {Router} from "@angular/router";
import { ToastService } from '../app/toast/toast.service';
import {TranslateModule, TranslateService} from "@ngx-translate/core";



@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
  imports: [TranslateModule, FormsModule]
})
export class ContactComponent implements OnInit {

  email = new Email();
  messageName = false;
  messageEmail = false;
  messageSubject = false;
  messageText = false;
  isSubmit = false;

  showSuccessEmail() {
    this.toastService.show(this.translate.instant('CONTACT.TOAST_OK'), {
      classname: 'bg-success text-light',
      delay: 5000 ,
      autohide: true,
    });
  }

  showErrorEmail() {
    this.toastService.show(this.translate.instant('CONTACT.TOAST_ERROR'), {
      classname: 'bg-danger text-light',
      delay: 5000 ,
      autohide: true,
    });
  }

  constructor(private router: Router,
              public toastService: ToastService,
              private translate: TranslateService) { }

  ngOnInit(): void {
  }



  public onSubmit(form: FormGroup, e: Event) {

    this.isSubmit = true;
    this.messageName = form.controls['name'].errors?.required;
    this.messageEmail = form.controls['email'].errors?.required || form.controls['email'].errors?.email;
    this.messageSubject = form.controls['subject'].errors?.required;
    this.messageText = form.controls['text'].errors?.required;

    if(form.valid) {
      emailjs.sendForm('service_contact', 'template_qqiyhml', e.target as HTMLFormElement, 'user_BBqImLJvHMfsJwBrg3e2W')
        .then(() => {
          this.showSuccessEmail();
          this.router.navigate(['/']);
        }, () => {
          this.showErrorEmail();
        });
    }
  }

}
