import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-examples',
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
  images = [

  { url: "https://cloudservicesimages.s3.amazonaws.com/images/spotify.png", title: "Spotify api", alt: "Spotify", description: "Reach your music clients through your app.", link: "https://open.spotify.com/" },
   
    { url: "https://cloudservicesimages.s3.amazonaws.com/images/active_support.svg",title:"CHAT GPT", alt: "Chat Gpt Source", description: "Use the latest AI powered engine, to answer your clients questions so that you do not have to.", link: "https://openai.com/" },
    { url: "https://cloudservicesimages.s3.amazonaws.com/images/stripePayment.svg", title: "STRIPE PAYMENT", alt: "Stripe Payment Api", description: "Collect payments from your clients, for your available products and services.", link: "https://stripe.com/en-ca" },
    {url:"https://cloudservicesimages.s3.amazonaws.com/images/spotify.png", title: "Spotify api", alt: "Spotify", description: "Reach your music clients through your app.", link: "https://open.spotify.com/" },


    ]
}
