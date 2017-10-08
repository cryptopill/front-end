import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerdialogComponent } from './scannerdialog.component';

describe('ScannerdialogComponent', () => {
  let component: ScannerdialogComponent;
  let fixture: ComponentFixture<ScannerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
