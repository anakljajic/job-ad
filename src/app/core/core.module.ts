import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MainPanelComponent} from './components/main-panel/main-panel.component';
import {HeaderComponent} from './components/main-panel/header/header.component';
import {NavigationItemComponent} from './components/main-panel/navigation-item/navigation-item.component';
import {SideNavComponent} from './components/main-panel/side-nav/side-nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CoreRoutingModule} from "./core-routing.module";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";

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
        MatSidenavModule,
        RouterModule,
        MatToolbarModule,
        CoreRoutingModule,
        MatCardModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule
    ]
})
export class CoreModule {
}
