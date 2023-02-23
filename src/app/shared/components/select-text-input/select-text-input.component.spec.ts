import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTextInputComponent } from './select-text-input.component';

describe('SelectTextInputComponent', () => {
  let component: SelectTextInputComponent;
  let fixture: ComponentFixture<SelectTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
