import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingsecComponent } from './upcomingsec.component';

describe('UpcomingsecComponent', () => {
  let component: UpcomingsecComponent;
  let fixture: ComponentFixture<UpcomingsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
