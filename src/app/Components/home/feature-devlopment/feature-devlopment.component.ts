import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-devlopment',
  templateUrl: './feature-devlopment.component.html',
  styleUrls: ['./feature-devlopment.component.css']
})
export class FeatureDevlopmentComponent implements OnInit{
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
  title = "Website solutions for your buisness";
  images = [
    { url: "https://cloudservicesimages.s3.amazonaws.com/images/online_calendar.svg",title:"Scheduling", alt: "Chat Gpt Source", description: "Take the hassle out of scheduling meetings with our convenient integration that lets your clients book appointments directly from your website.", link: "#" },
    { url: "https://cloudservicesimages.s3.amazonaws.com/images/web_shopping.svg", title: "Online Product Store", alt: "Online Store", description: "Are you a business looking to expand your sales channels and reach a wider audience? In today's digital age, having an online store is crucial to stay competitive and cater to the changing needs of your customers. With an online store, you can easily sell your products or services 24/7, anywhere in the world, without the need for a physical storefront.", link: "#" },
    {url:"https://cloudservicesimages.s3.amazonaws.com/images/design_feedback.svg", title: "Buisness Project Management Solutions", alt: "Spotify", description: "Tired of constantly searching for the right document or service for your business needs? Do you want to simplify your workflow and save time and money? If so, we have the solution for you!", link: "#" },


    ]
}
