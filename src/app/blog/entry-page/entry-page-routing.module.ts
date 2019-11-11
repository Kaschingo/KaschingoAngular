import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page.component';
import { GetPageDataResolverService } from 'angular-wagtail';


const routes: Routes = [{
  path: '',
  component: EntryPageComponent,
  resolve: {cmsData: GetPageDataResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryPageRoutingModule { }
