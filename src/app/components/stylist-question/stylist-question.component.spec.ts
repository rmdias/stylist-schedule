import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistQuestionComponent } from './stylist-question.component';

let orderData = {
  hasAppointment : false
};

describe('StylistQuestionComponent', () => {
  let component: StylistQuestionComponent;
  let fixture: ComponentFixture<StylistQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistQuestionComponent);
    component = fixture.componentInstance;
    component.orderData = orderData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the appointment on `orderData`', () => {
    component.toggleAppointment();
    expect(component.orderData.hasAppointment).toBe(true);
  });

  it('should desable the appointment on `orderData`', () => {
    component.toggleAppointment();
    expect(component.orderData.hasAppointment).toBe(false);
  });

});
