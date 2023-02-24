import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdTableComponent } from './job-ad-table.component';

describe('JobListComponent', () => {
  let component: JobAdTableComponent;
  let fixture: ComponentFixture<JobAdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
