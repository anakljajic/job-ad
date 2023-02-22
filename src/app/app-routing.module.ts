import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPanelComponent} from "./core/components/main-panel/main-panel.component";

const routes: Routes = [
  {
    path: '',
    component: MainPanelComponent,
    data: {title: "Home", icon: "home"},
    children: [
      {
        path: '',
        data: {title: 'Dahsboard', icon: 'dashboard'},
        loadChildren: () =>
          import('./core/core.module').then((module) => module.CoreModule),
      },
      {
        path: 'jobs',
        data: {title: 'Job', icon: 'worker'},
        loadChildren: () =>
          import('./job/job.module').then((module) => module.JobModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
