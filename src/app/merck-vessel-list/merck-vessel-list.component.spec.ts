/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MerckVesselListComponent } from './merck-vessel-list.component';

describe('MerckVesselListComponent', () => {
  let component: MerckVesselListComponent;
  let fixture: ComponentFixture<MerckVesselListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckVesselListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckVesselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
