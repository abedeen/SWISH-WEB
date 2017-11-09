import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMap1Component } from './google-map1.component';

describe('GoogleMap1Component', () => {
  let component: GoogleMap1Component;
  let fixture: ComponentFixture<GoogleMap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
