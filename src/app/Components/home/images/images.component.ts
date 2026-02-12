import { Component, HostListener, Input, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../../../services/config.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  buisnessMoto: string[];
  heroSectionTitle: string;
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
  Package website : https://github.com/ivylaboratory/angular-carousel
   */
  @Input() img_height: string | undefined;
  images_url: any[];

  constructor(config: NgbCarouselConfig, private configService: ConfigService) {
		// customize default values of carousels used by this component tree
		config.interval = 8000;
		config.wrap = false;
		config.keyboard = true;
		config.pauseOnHover = false;

    const siteConfig = this.configService.getConfig();
    this.buisnessMoto = siteConfig.home.heroMotto;
    this.heroSectionTitle = siteConfig.home.heroSectionTitle;
    this.images_url = siteConfig.home.carousel;
  }


}
