import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelContentComponent} from './components/panel-content/panel-content.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PanelContentComponent
  ],
  exports: [
    PanelContentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule {
}
