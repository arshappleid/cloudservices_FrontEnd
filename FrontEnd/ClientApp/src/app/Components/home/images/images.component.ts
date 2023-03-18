import { Component, HostListener, Input, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  buisnessMoto:string = "Ready to take your business to the next level? Our buisness is here to help you make a splash online!";
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
  images_url = [
    { path: "https://cloudserviceimgstorage.blob.core.windows.net/images/building_websites.svg",label:"Website Development", description: "A custom website to reach more clients." },
    {path:"https://cloudserviceimgstorage.blob.core.windows.net/images/create_automation.svg",label:"Process Automation",description :"Automate daily tasks, to save money and time."},
    {path:"https://cloudserviceimgstorage.blob.core.windows.net/images/manage_organization.svg",label:"Project Management",description :"Manage your whole organization, from your devices."}
  ];

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 8000;
		config.wrap = false;
		config.keyboard = true;
		config.pauseOnHover = false;
  }


}
