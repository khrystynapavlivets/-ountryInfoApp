import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryResolver } from './shared/resolve/country.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'country/:countryCode',
    component: CountryComponent,
    resolve: { country: CountryResolver },
  },
];
