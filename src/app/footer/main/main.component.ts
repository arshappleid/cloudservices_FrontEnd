import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'footer',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  isMobile: boolean = false;
  info: any;
  footerConfig: any;

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.footerConfig = config.footer;
    this.info = {
      companyEmail: config.footer.companyEmail,
      companyName: config.companyName,
      companyAddress: config.footer.companyAddress,
      companyPhoneNumber: config.footer.companyPhoneNumber,
      vision: config.footer.vision
    };
  }

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

    console.log("IsMobile=" + this.isMobile);
  }
}
