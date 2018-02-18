import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://nrg-frontend-task-api.herokuapp.com'

@Injectable()
export class AppointmentDatesService {

  constructor(
    private http: HttpClient
  ) { }
  
  getTimeSlots(): any {
    return this.http.get(`${API_URL}/timeslots`).toPromise();
  }
}
