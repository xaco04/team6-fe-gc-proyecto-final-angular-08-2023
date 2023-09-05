import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListAdminComponent } from './recipes-list-admin.component';

describe('RecipesListAdminComponent', () => {
  let component: RecipesListAdminComponent;
  let fixture: ComponentFixture<RecipesListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListAdminComponent]
    });
    fixture = TestBed.createComponent(RecipesListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
