import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './core/components/main-panel/main-panel.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainPanelComponent,
    data: { title: 'Home', icon: 'home' },
    children: [
      {
        path: '',
        data: { title: 'Dashboard', icon: 'dashboard' },
        loadChildren: () =>
          import('./core/core.module').then((module) => module.CoreModule),
      },
      {
        path: 'jobs',
        data: { title: 'Job ads', icon: 'worker' },
        loadChildren: () =>
          import('./job-ad/job-ad.module').then((module) => module.JobAdModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
