import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { reducers } from './store/reducers';
import { CoreEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CoreApi } from './api/core-api.service';
import { RouteCatcherService } from './services/route-catcher.service';
import { CoreComponentsModule } from './core-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([CoreEffects]),
    HttpClientModule,
    CoreRoutingModule,
    CoreComponentsModule,
  ],
  providers: [CoreApi, RouteCatcherService],
})
export class CoreModule {}
