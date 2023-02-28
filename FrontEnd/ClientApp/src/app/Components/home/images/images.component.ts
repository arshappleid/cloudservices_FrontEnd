import { Component, HostListener, Input, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  /*
  Package website : https://github.com/ivylaboratory/angular-carousel
   */
  @Input() img_height: string | undefined;
  images_url = [
    { path: "https://cloudserviceimgstorage.blob.core.windows.net/images/building_websites.svg",label:"Website Development", description: "A custom website to reach more clients." },
    {path:"https://cloudserviceimgstorage.blob.core.windows.net/images/create_automation.svg",label:"Process Automation",description :"Automate daily tasks, to save money and time."},
    {path:"https://cloudserviceimgstorage.blob.core.windows.net/images/manage_organization.svg",label:"label3",description :"Manage your whole organization, from your devices."}
  ];

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 8000;
		config.wrap = false;
		config.keyboard = true;
		config.pauseOnHover = false;
  }

  ngOnInit() {

  }

}
