import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WagtailModule } from 'angular-wagtail';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      WagtailModule.forRoot({
         pageTypes: [
            {
               type: 'home.HomePage',
               loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
            },
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
      NgbModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
