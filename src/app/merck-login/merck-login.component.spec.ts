import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckLoginComponent } from './merck-login.component';

describe('MerckLoginComponent', () => {
  let component: MerckLoginComponent;
  let fixture: ComponentFixture<MerckLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
