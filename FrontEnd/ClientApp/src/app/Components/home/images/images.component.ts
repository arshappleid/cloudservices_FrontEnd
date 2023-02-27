import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: []
})
export class ImagesComponent implements OnInit {
  /*
  Package website : https://github.com/ivylaboratory/angular-carousel
   */
  carousel_width?: any;
  carousel_height?: any;
  images_url = [
    { path: "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg", description: "Some image description 1" },
    {path:"https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034_1280.jpg",description :"Some image description 2"},
    {path:"https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg",description :"Some image description 3"}
  ];
  ngOnInit() {

  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.carousel_width = (window.innerWidth * 0.50);
    this.carousel_height = (window.innerHeight * 0.50);

    console.log("Height : "+window.innerHeight)
}
}
