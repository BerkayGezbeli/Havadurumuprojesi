import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherconditionsComponent } from './weatherconditions.component';

describe('WeatherconditionsComponent', () => {
  let component: WeatherconditionsComponent;
  let fixture: ComponentFixture<WeatherconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherconditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
