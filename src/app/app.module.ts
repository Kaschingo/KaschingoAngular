import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WagtailModule} from 'angular-wagtail';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WagtailModule.forRoot({
      pageTypes: [
        {
          type: 'catalog.ProductIndex',
          loadChildren: () => import('./shop/product-index/product-index.module').then(m => m.ProductIndexModule)
        },
        {
          type: 'catalog.Product',
          loadChildren: () => import('./shop/product/product.module').then(m => m.ProductModule)
        },
      ],
      wagtailSiteDomain: 'http://localhost:8000',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
