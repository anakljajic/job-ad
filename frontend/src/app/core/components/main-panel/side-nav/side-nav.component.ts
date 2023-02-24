import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() opened = false;

  home: any;
  navigationRoutes: any;
  navigationItems: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.checkRoutes();
  }

  checkRoutes() {
    var navigationRoute = this.router.config.find(r => r.path === '' && !r.redirectTo) as any;
    this.home = {
      title: navigationRoute.data.title,
      path: navigationRoute.path,
      icon: navigationRoute.data.icon,
      url: '/' + navigationRoute.path,
      activated: this.router.url === ('/' + navigationRoute.path)
    };

    this.navigationItems = [this.home];

    this.navigationRoutes = navigationRoute.children
      .filter((route: any) => {
        return route.path && route.data && route.data.title
      });

    this.navigationRoutes.forEach((r: any) => this.navigationItems.push({
      title: r.data.title,
      path: r.path,
      icon: r.data.icon,
      url: '/' + r.path,
      activated: this.router.url === ('/' + r.path)
    }));
  }
}
