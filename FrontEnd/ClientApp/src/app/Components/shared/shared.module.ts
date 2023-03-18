import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './input/text/text.component';
import { DropdownComponent } from './input/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TextComponent,
    DropdownComponent,
  ],
  imports: [
    // any library we need to use in this module.
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // all the declaration components we want to export out of this module.
    TextComponent,
    DropdownComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
