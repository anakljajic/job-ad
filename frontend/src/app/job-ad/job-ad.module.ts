import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAdRoutingModule } from './job-ad-routing.module';
import { JobAdApi } from './api/job-ad-api.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { JobAdEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { JobAdComponentsModule } from './job-ad-components.module';
import { JobAdActionService } from './services/job-ad-action.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('job', reducers),
    EffectsModule.forFeature([JobAdEffects]),
    JobAdRoutingModule,
    JobAdComponentsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [JobAdApi, JobAdActionService],
})
export class JobAdModule {}
