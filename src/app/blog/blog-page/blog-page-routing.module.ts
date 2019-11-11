import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';
import { GetPageDataResolverService } from 'angular-wagtail';


const routes: Routes = [{
  path: '',
  component: BlogPageComponent,
  resolve: {cmsData: GetPageDataResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPageRoutingModule { }
