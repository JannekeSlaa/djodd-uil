import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPrognoseComponent } from './chart-prognose.component';

describe('ChartPrognoseComponent', () => {
  let component: ChartPrognoseComponent;
  let fixture: ComponentFixture<ChartPrognoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPrognoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPrognoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
