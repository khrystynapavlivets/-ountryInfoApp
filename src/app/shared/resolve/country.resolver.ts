import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { HolidayService } from '../services/holiday.service';
import { CountryService } from '../services/country.service';

@Injectable({
  providedIn: 'root',
})
export class CountryResolver implements Resolve<any> {
  constructor(private countryService: CountryService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> {
    const countryCode = route.paramMap.get('countryCode');
    return this.countryService.getCountryByCode(countryCode as string);
  }
}
