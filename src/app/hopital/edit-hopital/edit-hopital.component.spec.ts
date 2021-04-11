import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHopitalComponent } from './edit-hopital.component';

describe('EditHopitalComponent', () => {
  let component: EditHopitalComponent;
  let fixture: ComponentFixture<EditHopitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHopitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
