import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobRoutingModule} from "./job-routing.module";
import {JobApi} from "./api/job.api";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {JobEffects} from "./store/effects";
import {HttpClientModule} from "@angular/common/http";
import {JobComponentsModule} from "./job-components.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('job', reducers),
    EffectsModule.forFeature([JobEffects]),
    JobRoutingModule,
    JobComponentsModule,
    HttpClientModule
  ],
  providers: [
    JobApi
  ]
})
export class JobModule {
}
