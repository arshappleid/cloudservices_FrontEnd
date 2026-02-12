import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { SiteConfig } from '../../services/config.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css',"./../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"]
})
export class NavMenuComponent {
  isExpanded = false;
  config: SiteConfig;
  companyName: string;
  navLinks: any[];

  constructor(private configService: ConfigService) {
    this.config = this.configService.getConfig();
    this.companyName = this.config.companyName;
    this.navLinks = this.config.navLinks;
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  closeNavbar() {
    if (!this.isExpanded) {
      this.isExpanded = true;
    }
  }
}

