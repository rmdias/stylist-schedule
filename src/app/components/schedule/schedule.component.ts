import { Component } from '@angular/core';

import { personalisationProgress } from '../order-progress-bar/personalisation-progress.interface';

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
    orderDetails: ''
  }

  constructor() { } 
}
