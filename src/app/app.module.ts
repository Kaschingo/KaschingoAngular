import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WagtailModule } from 'angular-wagtail';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

const wagtailModuleSettings = {
   pageTypes:
      [
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
         {
            type: 'puput.BlogPage',
            loadChildren: () => import('./blog/blog-page/blog-page.module').then(m => m.BlogPageModule)
         },
         {
            type: 'puput.EntryPage',
            loadChildren: () => import('./blog/entry-page/entry-page.module').then(m => m.EntryPageModule)
         },
      ],
   wagtailSiteDomain: 'http://localhost:8000',
};

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      WagtailModule.forRoot(wagtailModuleSettings),
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
