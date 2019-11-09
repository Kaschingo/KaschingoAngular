import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetPageDataResolverService} from 'angular-wagtail';
import {ProductComponent} from './product.component';


const routes: Routes = [{
  path: '',
  component: ProductComponent,
  resolve: {cmsData: GetPageDataResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
