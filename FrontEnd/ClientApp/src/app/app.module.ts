import { BrowserModule, } from '@angular/platform-browser';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IvyCarouselModule } from 'angular-responsive-carousel';
// Custom Components
import { ContactComponent } from './Components/contact/contact.component';
import { ImagesComponent } from './Components/home/images/images.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { FetchDataComponent } from './Components/fetch-data/fetch-data.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { FooterModule } from './footer/footer.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TeamComponent } from './Components/team/team.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    ImagesComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // App routing module
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'team', component: TeamComponent },
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    // angular material modules
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    // other imports
    IvyCarouselModule,
    SharedModule,
    FooterModule,
    MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

