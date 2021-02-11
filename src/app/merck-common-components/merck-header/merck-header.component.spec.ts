import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckHeaderComponent } from './merck-header.component';

describe('MerckHeaderComponent', () => {
  let component: MerckHeaderComponent;
  let fixture: ComponentFixture<MerckHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
