import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerkAnomalyViewComponent } from './merk-anomaly-view.component';

describe('MerkTableRecordsComponent', () => {
  let component: MerkAnomalyViewComponent;
  let fixture: ComponentFixture<MerkAnomalyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MerkAnomalyViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerkAnomalyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
