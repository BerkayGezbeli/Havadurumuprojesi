import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherreportsComponent } from './weatherreports.component';

describe('WeatherreportsComponent', () => {
  let component: WeatherreportsComponent;
  let fixture: ComponentFixture<WeatherreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
