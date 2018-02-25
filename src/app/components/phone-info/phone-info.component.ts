import { Component, Input } from '@angular/core';

import { CountriesList } from './country-codes';

import { orderData } from '../schedule/order-data.interface'; 

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.css']
})
export class PhoneInfoComponent {
  @Input() orderData: orderData;
  countriesList = CountriesList;
}
