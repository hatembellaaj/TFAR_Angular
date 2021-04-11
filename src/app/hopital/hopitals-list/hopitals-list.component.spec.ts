import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalsListComponent } from './hopitals-list.component';

describe('HopitalsListComponent', () => {
  let component: HopitalsListComponent;
  let fixture: ComponentFixture<HopitalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopitalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
