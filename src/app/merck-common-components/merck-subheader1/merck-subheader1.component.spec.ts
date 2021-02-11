import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckSubheader1Component } from './merck-subheader1.component';

describe('MerckSubheader1Component', () => {
  let component: MerckSubheader1Component;
  let fixture: ComponentFixture<MerckSubheader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckSubheader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckSubheader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
