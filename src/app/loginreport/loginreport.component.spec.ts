import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreportComponent } from './loginreport.component';

describe('LoginreportComponent', () => {
  let component: LoginreportComponent;
  let fixture: ComponentFixture<LoginreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginreportComponent]
    });
    fixture = TestBed.createComponent(LoginreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
