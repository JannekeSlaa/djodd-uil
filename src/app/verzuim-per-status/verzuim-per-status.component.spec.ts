import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzuimPerStatusComponent } from './verzuim-per-status.component';

describe('VerzuimPerStatusComponent', () => {
  let component: VerzuimPerStatusComponent;
  let fixture: ComponentFixture<VerzuimPerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzuimPerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzuimPerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
