import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobAdsComponent } from './view-job-ads.component';

describe('ViewJobsComponent', () => {
  let component: ViewJobAdsComponent;
  let fixture: ComponentFixture<ViewJobAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
