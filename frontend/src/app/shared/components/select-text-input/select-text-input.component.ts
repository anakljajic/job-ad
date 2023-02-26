import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-text-input',
  templateUrl: './select-text-input.component.html',
  styleUrls: ['./select-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTextInputComponent {
  @Input() fc!: FormControl;
  @Input() items: string[] = [];
  @Input() isMultiple = false;
  @Output() selectedItem: EventEmitter<string[]> = new EventEmitter<string[]>();

  get selectedItems(): string[] {
    return this.fc.value;
  }

  onSelectedItem(): void {
    this.selectedItem.emit(this.selectedItems);
  }
}
