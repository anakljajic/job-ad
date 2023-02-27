import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import {
  HOME_NAVIGATION_ITEM,
  NavigationItem,
} from '../../../model/navigation-item';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent implements OnInit {
  @Input() navigationItem: NavigationItem = HOME_NAVIGATION_ITEM;

  readonly matchOptions: IsActiveMatchOptions = {
    queryParams: 'ignored',
    matrixParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  ngOnInit() {}
}
