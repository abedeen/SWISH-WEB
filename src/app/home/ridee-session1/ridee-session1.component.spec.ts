import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideeSession1Component } from './ridee-session1.component';

describe('RideeSession1Component', () => {
  let component: RideeSession1Component;
  let fixture: ComponentFixture<RideeSession1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideeSession1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideeSession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
