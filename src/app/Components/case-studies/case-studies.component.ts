import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { CaseStudyItem } from '../../services/config.model';

@Component({
  selector: 'app-case-studies',
  standalone: false,
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {
  isMobile = false;
  pageTitle: string;
  pageTitleMobile: string;
  caseStudies: CaseStudyItem[] = [];
  filteredStudies: CaseStudyItem[] = [];

  filters: string[] = [];
  activeFilter = 'All';
  openDocIndex: number | null = null;

  constructor(private configService: ConfigService) {
    const config = this.configService.getConfig();
    this.pageTitle = config.caseStudies.pageTitle;
    this.pageTitleMobile = config.caseStudies.pageTitleMobile;
    this.caseStudies = config.caseStudies.items;
    this.filteredStudies = [...this.caseStudies];
    this.filters = config.caseStudies.filters ?? ['All', 'AWS', 'Azure', 'GCP', 'Compliance', 'Microsoft 365 Administration'];
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

  applyFilter(filter: string): void {
    this.activeFilter = filter;
    this.openDocIndex = null;
    if (filter === 'All') {
      this.filteredStudies = [...this.caseStudies];
    } else {
      this.filteredStudies = this.caseStudies.filter(
        study => study.tags?.includes(filter)
      );
    }
  }

  toggleDoc(index: number): void {
    this.openDocIndex = this.openDocIndex === index ? null : index;
  }
}
