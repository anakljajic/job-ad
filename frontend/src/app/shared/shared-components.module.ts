import { NgModule } from '@angular/core';
import { PanelContentComponent } from './components/panel-content/panel-content.component';
import { SearchTextInputComponent } from './components/search-text-input/search-text-input.component';
import { SelectTextInputComponent } from './components/select-text-input/select-text-input.component';
import { ChipTextInputComponent } from './components/chip-text-input/chip-text-input.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemDirective } from './directives/menu-item.directive';
import { CustomChipsComponent } from './components/custom-chip/custom-chips.component';
import { CustomSnackBarComponent } from './components/custom-snack-bar/custom-snack-bar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const components = [
  PanelContentComponent,
  SearchTextInputComponent,
  SelectTextInputComponent,
  ChipTextInputComponent,
  MenuComponent,
  MenuItemDirective,
  CustomChipsComponent,
  CustomSnackBarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SharedComponentsModule {}
