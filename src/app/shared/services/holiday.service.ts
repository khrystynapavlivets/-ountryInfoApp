import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private baseUrl = environment.apiUrl;
  private holidaysUrl = `${this.baseUrl}${environment.holidaysUrl}`;

  constructor(private http: HttpClient) {}

  getHolidays(countryCode: string, year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.holidaysUrl}/${year}/${countryCode}`);
  }
}
