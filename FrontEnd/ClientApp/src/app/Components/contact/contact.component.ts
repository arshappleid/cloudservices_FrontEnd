import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  validResp: any;
  showDatePicker = false;


  constructor(public _formbuilder: FormBuilder , private http : HttpClient){}
  ngOnInit() {
    this.contactForm = this._formbuilder.group({
      name: new FormControl('' , Validators.required),
      email: new FormControl('' ,[Validators.required , Validators.email]),
      contact_back_Date: new FormControl(''),
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
    let form = JSON.stringify(this.contactForm.getRawValue());
    console.log(form);
    let resp = this.http.post('apiurl', form);
    resp.subscribe(httpResp => {
      this.validResp = httpResp;
    })

  }

   myFilter = (d: Date | null): boolean => {
     const date = (d || new Date());
     const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
     const today = new Date();
    return day !== 0 && day !== 6 && (date >today );
   };

  toggleDatePicker() {
    if (this.showDatePicker) {
      this.showDatePicker = false;
    } else {
      this.showDatePicker = true;
    }
  }
}
