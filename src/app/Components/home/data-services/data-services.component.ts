import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./data-services.component.css']
})
export class DataServicesComponent implements OnInit{
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
   images = [
     { url: "https://cloudservicesimages.s3.amazonaws.com/images/data_charts.svg", title: "Data Charts", alt: "Data Charts", description: "Create Visuals to understand buisness performce.", link: "#" },

     { url: "https://cloudservicesimages.s3.amazonaws.com/images/data_dashboard.svg", title: "Data Dashboards", alt: "Data Dashboards", description: "Make visual data dashboard, that your team can use daily to track data changes.", link: "#" },

     { url: "https://cloudservicesimages.s3.amazonaws.com/images/database.jpg", title: "Database Management", alt: "Data Management", description: "Create, Manage, Maintain databse , to support your applications.", link: "#" },


   ]

}
