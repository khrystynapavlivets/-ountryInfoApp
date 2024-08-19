import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = environment.apiUrl;
  private countriesUrl = `${this.baseUrl}${environment.countriesUrl}`;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(this.countriesUrl);
  }

  getCountryByCode(countryCode: string): Observable<any> {
    return this.http
      .get<any[]>(`${this.countriesUrl}`)
      .pipe(
        map((countries: any[]) =>
          countries.find((country) => country.countryCode === countryCode)
        )
      );
  }
}
