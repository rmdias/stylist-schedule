import { Component, OnInit } from '@angular/core';
import { personalisationProgress } from '../order-progress-bar/personalisation-progress.interface';
import { orderData } from '../schedule/order-data.interface';

@Component({
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  lastOrder: orderData;
  hasAppointment: boolean;
  personalisationProgress: personalisationProgress = {
    style: 'progress-100',
    profile: 'progress-100',
    box: 'progress-100'
  };

  ngOnInit() {
    this.loadLastOrder()
  }

  private loadLastOrder(): void {
    this.lastOrder = this.replaceSlotFormat(JSON.parse(localStorage.getItem('outfitteryOrderData')));
    this.hasAppointment = !!this.lastOrder.stylist;
  }

  private replaceSlotFormat(lastOrder): any {
    if (lastOrder.slot) lastOrder.slot = lastOrder.slot.replace(':', 'h');
    return lastOrder;
  }
}
