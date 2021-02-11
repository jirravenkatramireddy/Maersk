import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckGateDataCardsComponent } from './merck-gate-data-cards.component';

describe('MerckGateDataCardsComponent', () => {
  let component: MerckGateDataCardsComponent;
  let fixture: ComponentFixture<MerckGateDataCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckGateDataCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckGateDataCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
