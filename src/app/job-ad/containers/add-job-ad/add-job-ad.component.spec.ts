import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobAdComponent } from './add-job-ad.component';

describe('AddJobComponent', () => {
  let component: AddJobAdComponent;
  let fixture: ComponentFixture<AddJobAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
