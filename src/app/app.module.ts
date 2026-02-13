import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Custom Components
import { ContactComponent } from './Components/contact/contact.component';
import { ImagesComponent } from './Components/home/images/images.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { FooterModule } from './footer/footer.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TeamComponent } from './Components/team/team.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureDevlopmentComponent } from './Components/home/feature-devlopment/feature-devlopment.component';
import { ServicesComponent } from './Components/services/services.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { CaseStudiesComponent } from './Components/case-studies/case-studies.component';
import { HealthCheckComponent } from './Components/health-check/health-check.component';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services/config.service';

export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ImagesComponent,
    ContactComponent,
    TeamComponent,
    FeatureDevlopmentComponent,
    ServicesComponent,
    TestimonialsComponent,
    CaseStudiesComponent,
    HealthCheckComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'case-studies', component: CaseStudiesComponent },
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'health', component: HealthCheckComponent },
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // other imports
    SharedModule,
    FooterModule,
    // Angular Material modules
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    // ng-bootstrap
    NgbCarouselModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

