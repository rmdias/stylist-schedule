import { Component, Input } from '@angular/core';

import { CountriesList } from './country-codes'; 

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.css']
})
export class PhoneInfoComponent {
  @Input() orderData;
  countriesList = CountriesList;
}
