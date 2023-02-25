import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContentComponent } from './components/panel-content/panel-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchTextInputComponent } from './components/search-text-input/search-text-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectTextInputComponent } from './components/select-text-input/select-text-input.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './store/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChipTextInputComponent } from './components/chip-text-input/chip-text-input.component';
import { MatChipsModule } from '@angular/material/chips';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItemDirective } from './directives/menu-item.directive';

@NgModule({
  declarations: [
    PanelContentComponent,
    SearchTextInputComponent,
    SelectTextInputComponent,
    ChipTextInputComponent,
    MenuComponent,
    MenuItemDirective,
  ],
  exports: [
    PanelContentComponent,
    SearchTextInputComponent,
    SelectTextInputComponent,
    ChipTextInputComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    EffectsModule.forFeature([SharedEffects]),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatChipsModule,
    MatMenuModule,
  ],
})
export class SharedModule {}
