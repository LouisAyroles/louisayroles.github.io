import {Component, OnInit} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {FormGroup} from "@angular/forms";
import {Email} from "../domain/email";
import {Router} from "@angular/router";
import { ToastService } from '../app/toast/toast.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = new Email();
  messageName = false;
  messageEmail = false;
  messageSubject = false;
  messageText = false;

  showSuccessEmail() {
    this.toastService.show('Your email has been successfully sent', {
      classname: 'bg-success text-light',
      delay: 5000 ,
      autohide: true,
    });
  }

  showErrorEmail() {
    this.toastService.show('Oops, it looks like there is a little problem with sending the email', {
      classname: 'bg-danger text-light',
      delay: 5000 ,
      autohide: true,
    });
  }


  constructor(private router: Router,
              public toastService: ToastService) { }

  ngOnInit(): void {
  }



  public onSubmit(form: FormGroup, e: Event) {

    this.messageName = form.controls['name'].errors?.required;
    this.messageEmail = form.controls['email'].errors?.required || form.controls['email'].errors?.email;
    this.messageSubject = form.controls['subject'].errors?.required;
    this.messageText = form.controls['text'].errors?.required;

    if(form.valid) {
      emailjs.sendForm('service_contact', 'template_qqiyhml', e.target as HTMLFormElement, 'user_BBqImLJvHMfsJwBrg3e2W')
        .then((result: EmailJSResponseStatus) => {
          this.showSuccessEmail();
          this.router.navigate(['/']);
        }, (error) => {
          this.showErrorEmail();
        });
    }
  }

}
