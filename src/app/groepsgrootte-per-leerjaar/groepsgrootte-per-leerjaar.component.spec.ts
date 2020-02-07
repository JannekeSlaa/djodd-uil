import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroepsgroottePerLeerjaarComponent } from './groepsgrootte-per-leerjaar.component';

describe('GroepsgroottePerLeerjaarComponent', () => {
  let component: GroepsgroottePerLeerjaarComponent;
  let fixture: ComponentFixture<GroepsgroottePerLeerjaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroepsgroottePerLeerjaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroepsgroottePerLeerjaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
