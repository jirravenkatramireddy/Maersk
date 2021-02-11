import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerckTerminalactivityComponent } from './merck-terminalactivity.component';

describe('MerckTerminalactivityComponent', () => {
  let component: MerckTerminalactivityComponent;
  let fixture: ComponentFixture<MerckTerminalactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerckTerminalactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerckTerminalactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
