import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { API_URL } from '../../API_URL';

@Injectable()
export class ScheduleService {
  
  constructor(
    private http: HttpClient
  ) { }
  
  createAppointment(params): Promise<any> {
    return this.http.post(`${API_URL}/appointments`, params).toPromise();
  }

}
