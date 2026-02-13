import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isMobile: boolean = false;
  
  contactForm!: FormGroup;
  validResp: any;
  showDatePicker = false;
  pageTitle: string;
  labels: any;
  backendUrl: string;
  submitSuccess: boolean = false;
  submitError: boolean = false;
  timeSlots: string[] = [];
  bookingLink: string;
  bookingButtonText: string;

  constructor(public _formbuilder: FormBuilder, private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.pageTitle = config.contact.pageTitle;
    this.labels = config.contact.formLabels;
    this.backendUrl = config.backendEndpoint;
    this.bookingLink = config.contact.bookingLink;
    this.bookingButtonText = config.contact.bookingButtonText;
    this.generateTimeSlots();
  }
  ngOnInit() {
    // check for mobile
    emailjs.init('KBAdXMj4nlaRoxpRh');
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            this.isMobile = true ;
         } else {
            this.isMobile = false ;
    }

    this.contactForm = this._formbuilder.group({
      name: new FormControl('' , Validators.required),
      email: new FormControl('' ,[Validators.required , Validators.email]),
      contact_back_Date: new FormControl(''),
      callback_time: new FormControl(''),
      project_description: new FormControl(''),
      contact_number : new FormControl('',Validators.pattern("[0-9]{10}")),
    })
  }


  resetForm() {
    this.ngOnInit(); // Will automatically reset the form.
  }

  submitrequest() {
    let parsedDate = this.contactForm.controls['contact_back_Date'].value;
    parsedDate = (new Date(parsedDate)).toLocaleDateString("en-JM",{day:'numeric',month:'numeric',year:'numeric'});
    this.contactForm.controls['contact_back_Date'].setValue(parsedDate);

    this.submitSuccess = false;
    this.submitError = false;

    const callbackTime = this.contactForm.controls['callback_time'].value;
    const timeDisplay = callbackTime ? callbackTime + ' EST' : 'Not specified';

    const templateParams = {
      title: 'Client Reachout from Website',
      name: this.contactForm.controls['name'].value,
      callBackTime: timeDisplay,
      message: this.contactForm.controls['project_description'].value,
      callBackDate: parsedDate,
      phoneNumber: this.contactForm.controls['contact_number'].value,
      email: this.contactForm.controls['email'].value
    };

    emailjs.send('service_5kxk9nw', 'template_mlyqlu5', templateParams)
      .then(() => {
        this.submitSuccess = true;
        this.resetForm();
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
        this.submitError = true;
      });
  }

   myFilter = (d: Date | null): boolean => {
     const date = (d || new Date());
     const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
     const today = new Date();
    return day !== 0 && day !== 6 && (date >today );
   };

  generateTimeSlots() {
    this.timeSlots = [];
    for (let h = 8; h <= 18; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 18 && m > 0) break;
        const hour12 = h > 12 ? h - 12 : h;
        const ampm = h >= 12 ? 'PM' : 'AM';
        const min = m.toString().padStart(2, '0');
        this.timeSlots.push(`${hour12}:${min} ${ampm}`);
      }
    }
  }

  toggleDatePicker() {
    if (this.showDatePicker) {
      this.showDatePicker = false;
    } else {
      this.showDatePicker = true;
    }
  }
}
