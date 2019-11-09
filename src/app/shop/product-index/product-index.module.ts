import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductIndexRoutingModule } from './product-index-routing.module';
import { ProductIndexComponent } from './product-index.component';


@NgModule({
  declarations: [ProductIndexComponent],
  imports: [
    CommonModule,
    ProductIndexRoutingModule
  ]
})
export class ProductIndexModule { }
