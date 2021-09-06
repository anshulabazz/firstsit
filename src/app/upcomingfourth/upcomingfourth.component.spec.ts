import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfourthComponent } from './upcomingfourth.component';

describe('UpcomingfourthComponent', () => {
  let component: UpcomingfourthComponent;
  let fixture: ComponentFixture<UpcomingfourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingfourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingfourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
