import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInfoFormComponent } from './business-info-form.component';

describe('BusinessInfoFormComponent', () => {
  let component: BusinessInfoFormComponent;
  let fixture: ComponentFixture<BusinessInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
