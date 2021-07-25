import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeCytoDialogComponent } from './etude-cyto-dialog.component';

describe('EtudeCytoDialogComponent', () => {
  let component: EtudeCytoDialogComponent;
  let fixture: ComponentFixture<EtudeCytoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudeCytoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudeCytoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
