import { Component, OnInit, Input } from '@angular/core';
import { AppointmentDatesService } from './appointment-dates.service';
import { DatePipe } from '@angular/common';

import { orderData } from '../schedule/order-data.interface';

@Component({
  selector: 'app-appointment-dates',
  templateUrl: './appointment-dates.component.html',
  styleUrls: ['./appointment-dates.component.css'],
  providers: [
    DatePipe
  ]
})
export class AppointmentDatesComponent implements OnInit {

  appointments: any[];
  timeSlots: any[];
  currentDay: any;
  currentTimeSlot: any;

  currentPage: number = 0;
  paginationAvailable: boolean;

  constructor(
    private datePipe: DatePipe,
    private appointmentDatesService: AppointmentDatesService
  ) { }

  @Input() orderData: orderData;

  ngOnInit() {
    this.loadAppointments();
  }

  selectDay(day): void {
    this.currentDay = day;
    this.orderData.timeSlot.date = day.date;
    this.orderData.timeSlot.start = '';
  }

  selectTimeSlot(timeSlot): void {
    this.currentTimeSlot = timeSlot;
    this.orderData.timeSlot.start = timeSlot.start;    
  }

  nextTimeSlotsPage(): void {
    if (this.currentPage < (this.timeSlots.length - 1))
      this.currentPage = this.currentPage + 1;
  }

  previousTimeSlotsPage(): void {
    if (this.currentPage > 0)
      this.currentPage = this.currentPage - 1;
  }

  private loadTimeSlots(): void {
    this.appointmentDatesService.getTimeSlots().then((data) => {
      let freeTimeSlots = this.filterFreeAppointments(data, this.appointments);

      this.timeSlots = this.createTimeSlotsPagination(this.formatDates(freeTimeSlots));
      this.currentDay = this.timeSlots[0][0];
      this.orderData.timeSlot.date = this.currentDay.date;
    });
  }

  private loadAppointments(): void {
    this.appointmentDatesService.getAppointments().then((data) => {
      this.appointments = data;
      this.loadTimeSlots();      
    });
  }

  private filterFreeAppointments(timeSlots: any[], appointments: any[]) {
    let filtredTimeSlots = [];

    let removeBookedAppointments = (timeSlotDate, timeSlot) => {
      for (let j = 0; j < appointments.length; j++) {
        if (timeSlotDate === appointments[j].date) {
          if (timeSlot.start === appointments[j].slot) return false;
        }
      }
      return true;
    }

    let filterFreeSlots = (timeSlot) => {
      return timeSlot.slots.filter((slot) => {
        return removeBookedAppointments(timeSlot.date, slot);
      });
    };

    for (let i = 0; i < timeSlots.length; i++) {
      let timeSlot = timeSlots[i];
      timeSlot.slots = filterFreeSlots(timeSlot);
      filtredTimeSlots.push(timeSlot)
    }

    return filtredTimeSlots;
  }

  private formatDates(timeSlots: any[]) {
    return timeSlots.map((timeSlot, index) => {
      timeSlot.id = index+1;
      timeSlot.abbreviatedDate = `${this.datePipe.transform(timeSlot.date, 'MMM')} ${this.datePipe.transform(timeSlot.date, 'd')}`;
      timeSlot.weekDay = `${this.datePipe.transform(timeSlot.date, 'EEEE')}`;
      return timeSlot
    });
  }

  private createTimeSlotsPagination(timeSlots: any[]): any {
    let size = 4;
    let index = 0;
    let arrays = [];
    let lasItem;

    // breaking `timeSlots` in pages
    while (timeSlots.length > 0) {
      arrays.push(timeSlots.splice(0, size));
    }
    
    // repeate the last item in the next page
    for (let index = 0; index < arrays.length; index++) {
      const element = arrays[index];

      if (arrays[index + 1])
        arrays[index + 1].unshift(element[element.length-1]);
    }

    lasItem = arrays[arrays.length - 1];

    // verify if the last item is totally showed
    if (lasItem.length == size) {
      arrays.push([lasItem[lasItem.length - 1]]) 
    }

    return arrays;
  }



}
