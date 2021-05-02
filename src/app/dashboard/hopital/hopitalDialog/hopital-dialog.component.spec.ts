import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalDialogComponent } from './hopital-dialog.component';

describe('HopitalDialogComponent', () => {
  let component: HopitalDialogComponent;
  let fixture: ComponentFixture<HopitalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopitalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
