import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-feature-devlopment',
  standalone: false,
  templateUrl: './feature-devlopment.component.html',
  styleUrls: ['./feature-devlopment.component.css']
})
export class FeatureDevlopmentComponent implements OnInit{
  @Input() serviceIndex: number = 0;
  isMobile: boolean = false;

  /*
  Icons taken from :
  https://undraw.co/illustrations
  Hex code : #0276FF
   */
  title: string = '';
  images: any[] = [];

  constructor(private configService: ConfigService) {}

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

    const config = this.configService.getConfig();
    const service = config.home.homeServices[this.serviceIndex];
    if (service) {
      this.title = service.title;
      this.images = service.items;
    }
  }
}
