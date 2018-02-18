import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stylist-question',
  templateUrl: './stylist-question.component.html',
  styleUrls: ['./stylist-question.component.css']
})
export class StylistQuestionComponent {

  @Input() orderData;

  toggleAppointment(): void {
    this.orderData.hasAppointment = !this.orderData.hasAppointment
  }
}
