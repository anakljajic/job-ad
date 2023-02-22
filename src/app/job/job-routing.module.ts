import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {JobListComponent} from "./components/job-list/job-list.component";
import {AddJobComponent} from "./containers/add-job/add-job.component";

const routes: Routes = [
  {
    path: 'add',
    component: AddJobComponent
  },
  {
    path: 'list',
    component: JobListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {
}
