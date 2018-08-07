import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieSearchComponent } from './trie-search.component';

describe('TrieSearchComponent', () => {
  let component: TrieSearchComponent;
  let fixture: ComponentFixture<TrieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
