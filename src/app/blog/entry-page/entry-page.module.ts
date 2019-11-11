import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPageRoutingModule } from './entry-page-routing.module';
import { EntryPageComponent } from './entry-page.component';


@NgModule({
  declarations: [EntryPageComponent],
  imports: [
    CommonModule,
    EntryPageRoutingModule
  ]
})
export class EntryPageModule { }
