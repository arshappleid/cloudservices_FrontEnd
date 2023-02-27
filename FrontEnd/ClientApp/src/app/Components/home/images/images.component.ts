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
    { path: "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg",label:"label1", description: "Some image description 1" },
    {path:"https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034_1280.jpg",label:"label2",description :"Some image description 2"},
    {path:"https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg",label:"label3",description :"Some image description 3"}
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
