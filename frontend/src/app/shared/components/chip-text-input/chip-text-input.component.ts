import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chip-text-input',
  templateUrl: './chip-text-input.component.html',
  styleUrls: ['./chip-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipTextInputComponent {
  readonly separatorKeysCodes = [ENTER, COMMA, TAB] as const;

  @Input() fc!: FormControl;
  @Input() chipItems: string[] = [];
  @Output() selectedItem: EventEmitter<string[]> = new EventEmitter<string[]>();

  add(event: MatChipInputEvent): void {
    const skill = (event.value || '').trim();

    if (skill) {
      this.chipItems.push(skill);
    }

    event.chipInput!.clear();
  }

  remove(skill: string): void {
    const index = this.chipItems.indexOf(skill);

    if (index >= 0) {
      this.chipItems.splice(index, 1);
    }
  }

  edit(skill: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(skill);
      return;
    }

    const index = this.chipItems.indexOf(skill);
    if (index >= 0) {
      this.chipItems[index] = value;
    }
  }
}
