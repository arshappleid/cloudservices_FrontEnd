import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-case-studies',
  standalone: false,
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {
  isMobile: boolean = false;
  pageTitle: string;
  pageTitleMobile: string;
  caseStudies: any[];

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.pageTitle = config.caseStudies.pageTitle;
    this.pageTitleMobile = config.caseStudies.pageTitleMobile;
    this.caseStudies = config.caseStudies.items;
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
