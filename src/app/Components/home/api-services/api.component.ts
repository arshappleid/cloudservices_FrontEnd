import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'api-examples',
  standalone: false,
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{
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

  /*
  Icons taken from :
  https://undraw.co/illustrations
  Hex code : #0276FF
   */
  sectionTitle: string;
  images: any[];

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.sectionTitle = config.home.apiServices.title;
    this.images = config.home.apiServices.items;
  }
}
