import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppointmentDatesComponent } from './appointment-dates.component';

import { AppointmentDatesService } from './appointment-dates.service';

import { CountriesList } from '../phone-info/country-codes';
import { TimeSlotsMock } from './time-slot-mock';
import { AppointmentsMock } from './appointment-data-mock';

const timeSlotsMock = TimeSlotsMock;
const appointmentsMock = AppointmentsMock;

const timeSlotsResponseeMock = {
  then: (promise) => {
    promise(timeSlotsMock);
  }
};

const appointmentDatesMock = {
  then: (promise) => {
    promise(appointmentsMock);
  }
};

export class AppointmentDatesServiceSub {
  getTimeSlots() {
    return timeSlotsResponseeMock
  }

  getAppointments() {
    return appointmentDatesMock
  }
};

const orderData = {
  hasAppointment: false,
  orderDetails: '',
  phoneInfo: CountriesList[1],
  timeSlot: {
    start: '',
    date: ''
  }
}

describe('AppointmentDatesComponent', () => {
  let component: AppointmentDatesComponent;
  let fixture: ComponentFixture<AppointmentDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDatesComponent ],
      imports: [
        HttpClientModule     
      ],
      providers: [
        DatePipe,
        { provide: AppointmentDatesService, useClass: AppointmentDatesServiceSub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDatesComponent);
    component = fixture.componentInstance;
    component.orderData = orderData;
    fixture.detectChanges();
  });

  it('should verify if the `timeSlots` pagination was created', () => {
    expect(component.timeSlots.length).toBe(3);
  });

  it('should verify if the `timeSlots` are with friendly date ', () => {
    expect(component.timeSlots[0][0].abbreviatedDate).toBe('Feb 18');
    expect(component.timeSlots[0][0].weekDay).toBe('Sunday');
  });

  it('should verify the method `selectDay` ', () => {
    let selectedDay = component.timeSlots[0][1];
    
    component.selectDay(selectedDay);
    expect(component.currentDay.date).toBe(selectedDay.date); // select the parameter as `currentDay`
    expect(component.orderData.timeSlot.date).toBe(selectedDay.date);
    expect(component.orderData.timeSlot.start).toBe(''); // clean the time from `orderData` when change the `currentDay`
  });

  it('should verify the method `selectTimeSlot` ', () => {
    let selectedTimeSlot = component.timeSlots[0][1].slots[0];
    
    component.selectTimeSlot(selectedTimeSlot);
    expect(component.currentTimeSlot.start).toBe(selectedTimeSlot.start); // select the parameter as `currentTimeSlot`
    expect(component.orderData.timeSlot.start).toBe(selectedTimeSlot.start);
  });
});
