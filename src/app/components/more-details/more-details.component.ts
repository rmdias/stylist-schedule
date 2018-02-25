import { Component, Input } from '@angular/core';

import { orderData } from '../schedule/order-data.interface';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {
  @Input() orderData: orderData;
}
