import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-images',
  standalone: false,
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnDestroy {
  buisnessMoto: string[];
  heroSectionTitle: string;
  isMobile: boolean = false;

  @Input() img_height: string | undefined;
  images_url: any[];
  activeIndex = 0;

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly autoPlayMs = 8000;

  constructor(private configService: ConfigService) {
    const siteConfig = this.configService.getConfig();
    this.buisnessMoto = siteConfig.home.heroMotto;
    this.heroSectionTitle = siteConfig.home.heroSectionTitle;
    this.images_url = siteConfig.home.carousel;
  }

  ngOnInit(): void {
    // check for mobile
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
      this.isMobile = true;
    }
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images_url.length;
    this.restartAutoPlay();
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images_url.length) % this.images_url.length;
    this.restartAutoPlay();
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.restartAutoPlay();
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => this.next(), this.autoPlayMs);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
