import { Component, Input } from '@angular/core';
import { orderData } from '../schedule/order-data.interface';

@Component({
  selector: 'app-stylist-question',
  templateUrl: './stylist-question.component.html',
  styleUrls: ['./stylist-question.component.css']
})
export class StylistQuestionComponent {

  @Input() orderData: orderData;

  toggleAppointment(): void {
    this.orderData.hasAppointment = !this.orderData.hasAppointment
  }
}
