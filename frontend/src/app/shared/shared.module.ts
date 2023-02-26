import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './store/effects';
import { SharedComponentsModule } from './shared-components.module';

@NgModule({
  declarations: [],
  exports: [SharedComponentsModule],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    SharedComponentsModule,
  ],
})
export class SharedModule {}
