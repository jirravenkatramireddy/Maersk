import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerkFlowdiagramComponent } from './merk-flowdiagram.component';

describe('MerkFlowdiagramComponent', () => {
  let component: MerkFlowdiagramComponent;
  let fixture: ComponentFixture<MerkFlowdiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerkFlowdiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerkFlowdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
