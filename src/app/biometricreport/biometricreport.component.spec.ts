import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricreportComponent } from './biometricreport.component';

describe('BiometricreportComponent', () => {
  let component: BiometricreportComponent;
  let fixture: ComponentFixture<BiometricreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiometricreportComponent]
    });
    fixture = TestBed.createComponent(BiometricreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
