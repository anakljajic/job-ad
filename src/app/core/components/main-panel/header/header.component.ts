import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleOpenEmitter: EventEmitter<any> = new EventEmitter<any>();

  toggleOpen(): void {
    this.toggleOpenEmitter.emit();
  }

}
