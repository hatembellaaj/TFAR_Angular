import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDtDialogComponent } from './service-dt-dialog.component';

describe('ServiceDtDialogComponent', () => {
  let component: ServiceDtDialogComponent;
  let fixture: ComponentFixture<ServiceDtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
