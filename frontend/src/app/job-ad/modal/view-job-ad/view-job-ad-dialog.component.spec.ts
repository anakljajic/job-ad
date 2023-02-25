import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobAdDialogComponent } from './view-job-ad-dialog.component';

describe('ViewJobAdComponent', () => {
  let component: ViewJobAdDialogComponent;
  let fixture: ComponentFixture<ViewJobAdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobAdDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobAdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
