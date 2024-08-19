import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CountryService } from '../../shared/services/country.service';
import { FormsModule } from '@angular/forms';
import { RandomCountriesService } from '../../shared/services/random-countries.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public countries: any[] = [];
  public filteredCountries: any[] = [];
  public searchCountry: string = '';
  public randomCountries: any[] = [];
  public holidays: any[] = [];

  constructor(
    private countryService: CountryService,
    private randomCountriesService: RandomCountriesService
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: any[]) => {
      this.countries = data;
      this.filteredCountries = data;
      this.getRandomCountries();
    });
  }

  findCountries(): void {
    this.filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(this.searchCountry.toLowerCase())
    );
  }

  getRandomCountries(): void {
    const indices = Array.from(Array(this.countries.length).keys());
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const randomIndices = indices.slice(0, 3);
    this.randomCountries = randomIndices.map((index) => this.countries[index]);
    this.getHolidaysForCountries();
  }

  getHolidaysForCountries(): void {
    const currentYear = new Date().getFullYear();
    this.randomCountries.forEach((country) => {
      const countryCode = country.countryCode;
      if (countryCode) {
        this.randomCountriesService
          .getHolidays(currentYear, countryCode)
          .subscribe(
            (holidays) => {
              this.holidays.push({
                country: country.name.common,
                holidays: holidays,
              });
            },
            (error) => {
              console.error(error);
            }
          );
      }
    });
  }

  getHolidaysForCountry(countryName: string): any[] {
    const countryHolidays = this.holidays.find(
      (h) => h.country === countryName
    );
    return countryHolidays ? countryHolidays.holidays : [];
  }
}
