import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddJobAdComponent} from "./containers/add-job-ad/add-job-ad.component";
import {ViewJobAdsComponent} from "./components/view-job-ads/view-job-ads.component";

const routes: Routes = [
  {
    path: '',
    component: ViewJobAdsComponent
  },
  {
    path: 'add',
    component: AddJobAdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {
}
