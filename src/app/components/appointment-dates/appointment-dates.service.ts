import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../../API_URL';

@Injectable()
export class AppointmentDatesService {

  constructor(
    private http: HttpClient
  ) { }
  
  getTimeSlots(): Promise<any> {
    return this.http.get(`${API_URL}/timeslots`).toPromise();
  }

  getAppointments(): Promise<any> {
    return this.http.get(`${API_URL}/appointments`).toPromise();
  }
}
