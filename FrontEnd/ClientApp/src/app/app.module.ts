
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiComponent } from './Components/home/api-services/api.component';
import { DataServicesComponent } from './Components/home/data-services/data-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    ImagesComponent,
    ContactComponent,
    TeamComponent,
    ApiComponent,
    DataServicesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot([
      // App routing module
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'team', component: TeamComponent },
    ]),
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // angular material modules
    ReactiveFormsModule,
    // other imports
    SharedModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    //NGB Bootstrap Modules,
    NgbCarouselModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }

