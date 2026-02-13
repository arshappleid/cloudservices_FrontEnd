import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  isMobile: boolean = false;
  pageTitle: string;
  pageTitleMobile: string;
  testimonials: any[];

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.pageTitle = config.testimonials.pageTitle;
    this.pageTitleMobile = config.testimonials.pageTitleMobile;
    this.testimonials = config.testimonials.items;
  }

  ngOnInit(): void {
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            this.isMobile = true;
         } else {
            this.isMobile = false;
         }
  }
}
