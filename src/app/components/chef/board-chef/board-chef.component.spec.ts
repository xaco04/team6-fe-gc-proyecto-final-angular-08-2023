import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardChefComponent } from './board-chef.component';

describe('BoardChefComponent', () => {
  let component: BoardChefComponent;
  let fixture: ComponentFixture<BoardChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardChefComponent]
    });
    fixture = TestBed.createComponent(BoardChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
