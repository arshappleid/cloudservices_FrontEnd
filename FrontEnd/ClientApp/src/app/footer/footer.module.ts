import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ExternalLinksComponent } from './main/external-links/external-links.component';



@NgModule({
  declarations: [
    MainComponent,
    ExternalLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainComponent]
})
export class FooterModule { }
