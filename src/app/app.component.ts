import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  isMobile = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
      this.isMobile = true;
    }

    // Apply theme from config.json as CSS custom properties
    const theme = this.configService.getConfig().theme;
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty('--app-bg', theme.backgroundColor);
      root.style.setProperty('--app-card-bg', theme.cardBackgroundColor);
      root.style.setProperty('--app-nav-bg', theme.navBackgroundColor);
      root.style.setProperty('--app-accent', theme.accentColor);
      root.style.setProperty('--app-text', theme.textColor);
    }
  }
}

