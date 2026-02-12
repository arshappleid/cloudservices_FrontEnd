import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit{
  isMobile: boolean = false;
  pageTitle: string;
  pageTitleMobile: string;
  services: any[];

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.pageTitle = config.services.pageTitle;
    this.pageTitleMobile = config.services.pageTitleMobile;
    this.services = config.services.items;
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
  }


}
