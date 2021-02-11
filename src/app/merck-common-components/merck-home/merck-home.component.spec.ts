import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckHomeComponent } from './merck-home.component';

describe('MerckHomeComponent', () => {
  let component: MerckHomeComponent;
  let fixture: ComponentFixture<MerckHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
