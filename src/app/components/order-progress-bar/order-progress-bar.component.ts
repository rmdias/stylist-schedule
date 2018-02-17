import { Component, OnInit, Input } from '@angular/core';

import { personalisationProgress } from './personalisation-progress.interface';

@Component({
  selector: 'app-order-progress-bar',
  templateUrl: './order-progress-bar.component.html',
  styleUrls: ['./order-progress-bar.component.css']
})
export class OrderProgressBarComponent {
  @Input() personalisationProgress: personalisationProgress;

  constructor() {}
}
