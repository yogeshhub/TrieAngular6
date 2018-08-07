import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieBoardComponent } from './trie-board.component';

describe('TrieBoardComponent', () => {
  let component: TrieBoardComponent;
  let fixture: ComponentFixture<TrieBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
