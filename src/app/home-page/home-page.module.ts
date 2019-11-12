import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { StreamFieldComponent } from '../stream-field/stream-field.component';
import { ImageComponent } from '../stream-field/image/image.component';


@NgModule({
  declarations: [HomePageComponent, StreamFieldComponent, ImageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
