import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobRoutingModule} from "./job-routing.module";
import {JobAdApi} from "./api/job-ad-api.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {JobAdEffects} from "./store/effects";
import {HttpClientModule} from "@angular/common/http";
import {JobComponentsModule} from "./job-components.module";
import {CallJobAdActionService} from "./services/callJobAdActionService";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('job', reducers),
    EffectsModule.forFeature([JobAdEffects]),
    JobRoutingModule,
    JobComponentsModule,
    HttpClientModule
  ],
  providers: [
    JobAdApi,
    CallJobAdActionService
  ]
})
export class JobModule {
}
