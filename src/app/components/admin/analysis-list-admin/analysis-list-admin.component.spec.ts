import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisListAdminComponent } from './analysis-list-admin.component';

describe('AnalysisListAdminComponent', () => {
  let component: AnalysisListAdminComponent;
  let fixture: ComponentFixture<AnalysisListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisListAdminComponent]
    });
    fixture = TestBed.createComponent(AnalysisListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
