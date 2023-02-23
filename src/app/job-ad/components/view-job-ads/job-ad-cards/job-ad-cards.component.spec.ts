import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdCardsComponent } from './job-ad-cards.component';

describe('JobCardsComponent', () => {
  let component: JobAdCardsComponent;
  let fixture: ComponentFixture<JobAdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
