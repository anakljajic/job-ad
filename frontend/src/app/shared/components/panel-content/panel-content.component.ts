import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelContentComponent implements OnInit {
  @Input() title!: string;
  @Input() tooltip!: string;
  @Input() icon!: string;
  @Input() haveAction = false;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  onClick(): void {
    this.buttonClick.emit();
  }
}
