import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingthirdComponent } from './upcomingthird.component';

describe('UpcomingthirdComponent', () => {
  let component: UpcomingthirdComponent;
  let fixture: ComponentFixture<UpcomingthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingthirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
