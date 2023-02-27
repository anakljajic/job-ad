import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NavigationItem } from '../../../model/navigation-item';
import { RouteCatcherService } from '../../../services/route-catcher.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  navigationItems: NavigationItem[] = [];

  @Input() opened = false;

  constructor(private routeCatcherService: RouteCatcherService) {}

  ngOnInit() {
    this.navigationItems = this.routeCatcherService.catchRoutes();
  }
}
