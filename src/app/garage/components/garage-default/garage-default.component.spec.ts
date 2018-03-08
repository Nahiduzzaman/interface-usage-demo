import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageDefaultComponent } from './garage-default.component';

describe('GarageDefaultComponent', () => {
  let component: GarageDefaultComponent;
  let fixture: ComponentFixture<GarageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
