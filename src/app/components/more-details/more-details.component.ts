import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {
  @Input() orderData;
}
