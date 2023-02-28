import { Component } from '@angular/core';

@Component({
  selector: 'data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./data-services.component.css']
})
export class DataServicesComponent {
   images = [
     { url: "https://cloudserviceimgstorage.blob.core.windows.net/images/data_charts.svg", title: "Data Charts", alt: "Chat Gpt Source", description: "Create Visuals to understand buisness performce.", link: "#" },

     { url: "https://cloudserviceimgstorage.blob.core.windows.net/images/data_dashboard.svg", title: "Data Dashboards", alt: "Data Dashboards", description: "Make visual data dashboard, that your team can use daily to track data changes.", link: "#" },

     { url: "https://cloudserviceimgstorage.blob.core.windows.net/images/database.jpg", title: "Database Management", alt: "Data Dashboards", description: "Create, Manage, Maintain databse , to support your applications.", link: "#" },


   ]

}
