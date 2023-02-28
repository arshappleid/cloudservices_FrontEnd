import { Component } from '@angular/core';

@Component({
  selector: 'api-examples',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  images = [
    { url: "https://cloudserviceimgstorage.blob.core.windows.net/images/chatGPT.png",title:"CHAT GPT", alt: "Chat Gpt Source", description: "Open Source AI chatbot.", link: "https://openai.com/" },
    { url: "https://cloudserviceimgstorage.blob.core.windows.net/images/stripePayment.svg", title: "STRIPE PAYMENT", alt: "Stripe Payment Api", description: "Collect payments from your clients, for your available products and services.", link: "https://stripe.com/en-ca" },
    {url:"https://cloudserviceimgstorage.blob.core.windows.net/images/spotify.png", title: "Spotify api", alt: "Spotify", description: "Reach your music clients through your app.", link: "https://open.spotify.com/" },


    ]
}
