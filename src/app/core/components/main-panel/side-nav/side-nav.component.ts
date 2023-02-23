import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.router.events.subscribe(value => {
    //   this.checkRoutes();
    // })
  }

  ngOnInit() {
    this.checkRoutes();
  }

  checkRoutes() {
    var navigationRoute = this.router.config.find(r => r.path === '' && !r.redirectTo) as any;
    console.log(navigationRoute.data);
    console.log(this.router.url)
    this.home = {
      title: navigationRoute.data.title,
      path: navigationRoute.path,
      icon: navigationRoute.data.icon,
      url: '/' + navigationRoute.path,
      activated: this.router.url === ('/' + navigationRoute.path)
    };
    console.log(this.home)

    this.navigationItems = [this.home];

    this.navigationRoutes = navigationRoute.children
      .filter((route: any) => {
        console.log(route);
        return route.path && route.data && route.data.title
      });

    this.navigationRoutes.forEach((r: any) => this.navigationItems.push({
      title: r.data.title,
      path: r.path,
      icon: r.data.icon,
      url: '/' + r.path,
      activated: this.router.url === ('/' + r.path)
    }));
    console.log(this.navigationItems);
  }
}
