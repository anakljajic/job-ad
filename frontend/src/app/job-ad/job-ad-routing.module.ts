import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobAdComponent } from './containers/add-job-ad/add-job-ad.component';
import { ViewJobAdsComponent } from './containers/view-job-ads/view-job-ads.component';
import { EditJobAdComponent } from './containers/edit-job-ad/edit-job-ad.component';

const routes: Routes = [
  {
    path: '',
    component: ViewJobAdsComponent,
  },
  {
    path: 'add',
    component: AddJobAdComponent,
  },
  {
    path: 'edit/:id',
    component: EditJobAdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAdRoutingModule {}
