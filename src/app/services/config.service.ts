import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteConfig } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: SiteConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get<SiteConfig>('/assets/config.json')
      .toPromise()
      .then((data) => {
        this.config = data!;
      });
  }

  getConfig(): SiteConfig {
    return this.config;
  }
}
