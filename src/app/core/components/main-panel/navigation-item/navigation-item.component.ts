import {Component, Input, OnInit} from '@angular/core';
import {Route} from "@angular/router";

export interface NavigationRoute extends Route {
  title?: string;
  path?: string;
  icon?: string;
  url?: string;
  activated: boolean;
}

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input() navigationItem: NavigationRoute = {
    title: 'Home',
    path: '',
    activated: false
  };

  ngOnInit() {
  }
}
