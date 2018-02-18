import { Component, OnInit, Input } from '@angular/core';
import { AppointmentDatesService } from './appointment-dates.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-dates',
  templateUrl: './appointment-dates.component.html',
  styleUrls: ['./appointment-dates.component.css'],
  providers: [
    DatePipe
  ]
})
export class AppointmentDatesComponent implements OnInit {

  timeSlots: any[];
  currentDay: any;
  currentTimeSlot: any;

  currentPage: number = 0;
  paginationAvailable: boolean;

  constructor(
    private datePipe: DatePipe,
    private appointmentDatesService: AppointmentDatesService
  ) { }

  @Input() orderData;

  ngOnInit() {
    this.loadTimeSlots();
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
      this.timeSlots = this.createTimeSlotsPagination(this.formatDates(data));
      this.currentDay = this.timeSlots[0][0];
      this.orderData.timeSlot.date = this.currentDay.date;
    });
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
