import { Component } from '@angular/core';

import { personalisationProgress } from '../order-progress-bar/personalisation-progress.interface';
import { CountriesList } from '../phone-info/country-codes';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  personalisationProgress:personalisationProgress = {
    style: 'progress-100',
    profile: 'progress-100',
    box: 'progress-25'
  }

  orderData = {
    hasAppointment: false,
    orderDetails: '',
    phoneInfo: CountriesList[1],
    timeSlot: {
      start: '',
      date: ''
    }
  }

  constructor() { } 

  isValidOrder(): boolean {
    let hasValidDate = this.orderData.timeSlot.date.length > 0;
    let hasValidTime = this.orderData.timeSlot.start.length > 0;
    let hasValidPhoneCode = this.orderData.phoneInfo.code.length > 0;
    let hasValidPhoneNumber = this.orderData.phoneInfo.number.length > 0;

    if ( !this.orderData.hasAppointment ) return true;
    if ( !hasValidDate || !hasValidTime ) return false;
    if ( this.orderData.hasAppointment && !hasValidPhoneCode ) return false;
    if ( this.orderData.hasAppointment && !hasValidPhoneNumber )return false;

    return true
  }
}
