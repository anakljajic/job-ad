import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { HeaderComponent } from './components/main-panel/header/header.component';
import { NavigationItemComponent } from './components/main-panel/navigation-item/navigation-item.component';
import { SideNavComponent } from './components/main-panel/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LetModule } from '@ngrx/component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    MainPanelComponent,
    HeaderComponent,
    NavigationItemComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LetModule,
    MaterialModule,
    RouterModule,
  ],
})
export class CoreComponentsModule {}
