import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { HeaderComponent } from './components/main-panel/header/header.component';
import { NavigationItemComponent } from './components/main-panel/navigation-item/navigation-item.component';
import { SideNavComponent } from './components/main-panel/side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreRoutingModule } from './core-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { reducers } from './store/reducers';
import { CoreEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LetModule } from '@ngrx/component';
import { CoreApi } from './api/core-api.service';

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
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([CoreEffects]),
    LetModule,
    HttpClientModule,
    MatSidenavModule,
    RouterModule,
    MatToolbarModule,
    CoreRoutingModule,
    MatCardModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
  ],
  providers: [CoreApi],
})
export class CoreModule {}
