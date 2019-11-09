import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductIndexComponent} from './product-index.component';
import {GetPageDataResolverService} from 'angular-wagtail';


const routes: Routes = [{
  path: '',
  component: ProductIndexComponent,
  resolve: {cmsData: GetPageDataResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIndexRoutingModule {
}
