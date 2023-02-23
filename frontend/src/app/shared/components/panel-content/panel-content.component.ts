import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() haveAction = false;
  @Input() isContainer = false;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}
