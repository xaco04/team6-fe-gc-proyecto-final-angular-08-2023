import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourSelectionComponent } from './hour-selection.component';

describe('HourSelectionComponent', () => {
  let component: HourSelectionComponent;
  let fixture: ComponentFixture<HourSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourSelectionComponent]
    });
    fixture = TestBed.createComponent(HourSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
