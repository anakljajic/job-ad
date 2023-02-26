import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-text-input',
  templateUrl: './search-text-input.component.html',
  styleUrls: ['./search-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTextInputComponent {
  @Input() fc!: FormControl;
  @Output() searchKeyUp: EventEmitter<string> = new EventEmitter<string>();

  searchInput(): void {
    this.searchKeyUp.emit();
  }

  clearInput(): void {
    if (this.fc) {
      this.fc.reset();
    }
  }
}
