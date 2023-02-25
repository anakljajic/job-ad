import { Injectable } from '@angular/core';
import { NavigationItem } from '../model/navigation-item';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteCatcherService {
  constructor(private router: Router) {}

  catchRoutes(): NavigationItem[] {
    let navigationItems = [];

    const navigationRoute = this.router.config.find(
      (r) => r.path === '' && !r.redirectTo
    ) as any;

    const home = this.extractHomePage(navigationRoute);

    navigationItems = [home];

    const navigationRoutes = navigationRoute.children.filter((route: any) => {
      return route.path && route.data && route.data.title;
    });

    navigationRoutes.forEach((r: any) =>
      navigationItems.push({
        title: r.data.title,
        path: r.path,
        icon: r.data.icon,
        url: '/' + r.path,
        activated: this.router.url === '/' + r.path,
      } as NavigationItem)
    );

    return navigationItems;
  }

  extractHomePage(navigationRoute: Route): NavigationItem {
    return {
      title: navigationRoute.data?.['title'],
      path: navigationRoute.path,
      icon: navigationRoute.data?.['icon'],
      url: '/' + navigationRoute.path,
      activated: this.router.url === '/' + navigationRoute.path,
    };
  }
}
