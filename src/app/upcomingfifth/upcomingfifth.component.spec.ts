import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfifthComponent } from './upcomingfifth.component';

describe('UpcomingfifthComponent', () => {
  let component: UpcomingfifthComponent;
  let fixture: ComponentFixture<UpcomingfifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingfifthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingfifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
