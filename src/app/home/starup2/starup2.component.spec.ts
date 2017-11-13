import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Starup2Component } from './starup2.component';

describe('Starup2Component', () => {
  let component: Starup2Component;
  let fixture: ComponentFixture<Starup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Starup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Starup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
