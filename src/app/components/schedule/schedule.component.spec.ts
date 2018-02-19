import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';

import { StylistQuestionComponent } from '../stylist-question/stylist-question.component';
import { PhoneInfoComponent } from '../phone-info/phone-info.component';
import { AppointmentDatesComponent } from '../appointment-dates/appointment-dates.component';
import { OrderProgressBarComponent } from '../order-progress-bar/order-progress-bar.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';

import { AppointmentDatesService } from '../appointment-dates/appointment-dates.service';

import { CountriesList } from '../phone-info/country-codes';

const appRoutes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
];

const orderData = {
  hasAppointment: false,
  orderDetails: '',
  phoneInfo: CountriesList[1],
  timeSlot: {
    start: '',
    date: ''
  }
};

const createAppointmentMock = {
  then: (promise) => {
    promise({});
  }
};

export class ScheduleServiceSub {
  createAppointment(params) {
    return createAppointmentMock
  }
};

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        OrderProgressBarComponent,
        StylistQuestionComponent,
        MoreDetailsComponent,
        PhoneInfoComponent,
        AppointmentDatesComponent,

        ScheduleComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },        
        { provide: ScheduleService, useClass: ScheduleServiceSub },
        AppointmentDatesService        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    component.orderData = orderData;
    fixture.detectChanges();
  });

  it('should verify if the `orderData` without phone appointment is valid', () => {
    expect(component.isValidOrder()).toBe(true); 
  });

  it('should verify if the `orderData` with phone appointment but without contact data is invalid', () => {
    component.orderData.hasAppointment = true;
    expect(component.isValidOrder()).toBe(false); 
  });


  it('should verify if the `orderData` with phone appointment and with contact data is valid', () => {
    component.orderData = {
      hasAppointment: true,
      orderDetails: "Test",
      phoneInfo: {code: "+49", name: "Germany", number: "345687654"},
      timeSlot:{start: "09:00", date: "2018-02-19"}
    };

    expect(component.isValidOrder()).toBe(true); 
  });
});
