import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomChipsComponent {
  @Input() chips!: string[];
}
