import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTextInputComponent } from './chip-text-input.component';

describe('ChipTextInputComponent', () => {
  let component: ChipTextInputComponent;
  let fixture: ComponentFixture<ChipTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
