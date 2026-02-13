import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SiteConfig } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: SiteConfig;

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<void> {
    const data = await firstValueFrom(this.http.get<SiteConfig>('/assets/config.json'));
    this.config = data;
  }

  getConfig(): SiteConfig {
    return this.config;
  }
}
