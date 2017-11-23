import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitListComponent } from './split-list.component';

describe('SplitListComponent', () => {
  let component: SplitListComponent;
  let fixture: ComponentFixture<SplitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
