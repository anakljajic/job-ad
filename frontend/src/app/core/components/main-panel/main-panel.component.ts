import { Component } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent {
  openedSideNav = false;

  toggleSideNav(): void {
    this.openedSideNav = !this.openedSideNav;
  }
}
