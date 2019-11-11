import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { GetPageDataResolverService } from 'angular-wagtail';


const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  resolve: {cmsData: GetPageDataResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

