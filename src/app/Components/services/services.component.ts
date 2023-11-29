import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit{
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

  services = [
    { name : "Consulting Services" , description :"Our consulting services are designed to provide you with customized solutions to meet your business goals. Whether you need advice on website design, SEO optimization, or e-commerce strategy, we're here to guide you through the process and help you make informed decisions that drive your business forward." , img_url :"https://cloudservicesimages.s3.amazonaws.com/images/Interview.svg" },
    { name: "Full Project Completion and Maintainence", description :"Our company provides a full project completion service for website development, including consultation, design, coding, testing, and deployment. They aim to make the process hassle-free for their clients. Additionally, they offer maintenance services to keep the website up-to-date and functioning optimally, addressing issues, updating content, and making necessary changes." , img_url :"https://cloudservicesimages.s3.amazonaws.com/images/software_engineer.svg" },
    { name: "Contract Completion" , description :"Looking to complete your business software project quickly and efficiently? We specialize in helping businesses complete their software projects on a contract basis, offering expert assistance in niche areas to ensure your project is completed on time and on budget. With our years of experience and commitment to quality, you can trust us to deliver top-notch results that meet your specific needs. So why wait? Contact us today to get started on your next project" , img_url :"https://cloudservicesimages.s3.amazonaws.com/images/agreement.svg" },
  ];
}
