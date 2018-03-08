import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageSecondComponent } from './garage-second.component';

describe('GarageSecondComponent', () => {
  let component: GarageSecondComponent;
  let fixture: ComponentFixture<GarageSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
