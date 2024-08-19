import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RandomCountriesService {
  private baseUrl = environment.apiUrl;
  private holidaysUrl = `${this.baseUrl}${environment.holidaysUrl}`;

  constructor(private http: HttpClient) {}

  getHolidays(year: number, countryCode: string): Observable<any[]> {
    const currentDate = new Date();
    return this.http
      .get<any[]>(`${this.holidaysUrl}/${year}/${countryCode}`)
      .pipe(
        map((holidays) =>
          holidays.filter((holiday) => new Date(holiday.date) > currentDate)
        )
      );
  }
}
