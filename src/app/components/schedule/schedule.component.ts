import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ScheduleService } from './schedule.service';

import { personalisationProgress } from '../order-progress-bar/personalisation-progress.interface';
import { CountriesList } from '../phone-info/country-codes';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  personalisationProgress: personalisationProgress = {
    style: 'progress-100',
    profile: 'progress-100',
    box: 'progress-25'
  };

  orderData = {
    hasAppointment: false,
    orderDetails: '',
    phoneInfo: CountriesList[1],
    timeSlot: {
      start: '',
      date: ''
    }
  };

  constructor(
    private router: Router,
    private scheduleService: ScheduleService
  ) { } 

  isValidOrder(): boolean {
    let hasValidDate = this.orderData.timeSlot.date.length > 0;
    let hasValidTime = this.orderData.timeSlot.start.length > 0;
    let hasValidPhoneCode = this.orderData.phoneInfo.code.length > 0;
    let hasValidPhoneNumber = this.orderData.phoneInfo.number.length > 0;

    if ( !this.orderData.hasAppointment ) return true;
    if ( !hasValidDate || !hasValidTime ) return false;
    if ( this.orderData.hasAppointment && !hasValidPhoneCode ) return false;
    if ( this.orderData.hasAppointment && !hasValidPhoneNumber )return false;

    return true;
  }

  createAppointment(): void {
    if (!this.isValidOrder) return;
    if (this.isValidOrder && !this.orderData.hasAppointment) {
      localStorage.setItem('outfitteryOrderData', JSON.stringify(this.orderData));      
      this.router.navigate(['/success']);
      return;
    }

    let successCallback = (data) => {
      localStorage.setItem('outfitteryOrderData', JSON.stringify(data));
      this.router.navigate(['/success']);
    };

    let errorCallback = (err) => {
      alert(err.data);
    };

    let appointmentData = {
      date: this.orderData.timeSlot.date, 
      slot: this.orderData.timeSlot.start, 
      orderConfirmationComment: this.orderData.orderDetails || 'TEXT',
      phone: `${this.orderData.phoneInfo.code}${this.orderData.phoneInfo.number}`
    };

    this.scheduleService.createAppointment(appointmentData).then(successCallback, errorCallback);
  }

}
