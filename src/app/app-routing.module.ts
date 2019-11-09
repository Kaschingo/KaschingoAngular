import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CMSLoaderComponent, CMSLoaderGuard} from 'angular-wagtail';


const routes: Routes = [{path: '**', component: CMSLoaderComponent, canActivate: [CMSLoaderGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
