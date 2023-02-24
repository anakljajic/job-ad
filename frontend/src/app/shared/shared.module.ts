import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelContentComponent} from './components/panel-content/panel-content.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SearchTextInputComponent} from './components/search-text-input/search-text-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {SelectTextInputComponent} from './components/select-text-input/select-text-input.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    PanelContentComponent,
    SearchTextInputComponent,
    SelectTextInputComponent
  ],
  exports: [
    PanelContentComponent,
    SearchTextInputComponent,
    SelectTextInputComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatTooltipModule
    ]
})
export class SharedModule {
}
