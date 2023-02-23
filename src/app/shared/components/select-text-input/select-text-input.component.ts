import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-text-input',
  templateUrl: './select-text-input.component.html',
  styleUrls: ['./select-text-input.component.scss']
})
export class SelectTextInputComponent implements OnInit {
  @Input() fc!: FormControl;
  @Input() items: string[] = [];
  @Output() selectedItem: EventEmitter<string[]> = new EventEmitter<string[]>();

  get selectedItems(): string[] {
    return this.fc.value;
  }

  ngOnInit(): void {
    console.log(this.fc);
  }

  onSelectedItem(): void {
    console.log('Selected items: ' + this.selectedItems);
    this.selectedItem.emit(this.selectedItems);
  }
}
