import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalDtDialogComponent } from './hopital-dt-dialog.component';

describe('HopitalDtDialogComponent', () => {
  let component: HopitalDtDialogComponent;
  let fixture: ComponentFixture<HopitalDtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopitalDtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalDtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
