import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css',"./../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"]
})
export class NavMenuComponent {
  isExpanded = false;
  companyName = environment.companyName;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

