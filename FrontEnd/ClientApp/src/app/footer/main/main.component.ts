import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  isMobile: boolean = false;
  ngOnInit(): void {
    // check for mobile
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
  }
  info = {
      companyEmail:'help@customcloudssolutions.com',
      companyName : environment.companyName,
      companyAddress:"Arlington , VA , US",
    companyPhoneNumber: "780 935 1322",
      vision:"Building client solutions, to ease up their daily workflow."
  }
}
