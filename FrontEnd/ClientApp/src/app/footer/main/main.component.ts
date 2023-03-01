import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  info = {
      companyEmail:'help@customcloudssolutions.com',
      companyName : environment.companyName,
      companyAddress:"Arlington , VA , US",
    companyPhoneNumber: "780 935 1322",
      vision:"Building client solutions, to ease up their daily workflow."
  }
}
