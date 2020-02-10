import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzuimPerStatusNieuwComponent } from './verzuim-per-status-nieuw.component';

describe('VerzuimPerStatusNieuwComponent', () => {
  let component: VerzuimPerStatusNieuwComponent;
  let fixture: ComponentFixture<VerzuimPerStatusNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzuimPerStatusNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzuimPerStatusNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
