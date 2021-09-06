import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfirstComponent } from './upcomingfirst.component';

describe('UpcomingfirstComponent', () => {
  let component: UpcomingfirstComponent;
  let fixture: ComponentFixture<UpcomingfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
