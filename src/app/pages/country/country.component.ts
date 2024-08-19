import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HolidayService } from '../../shared/services/holiday.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent {
  public holiday: any = {};
  public holidays: any[] = [];
  public selectedYear!: number;
  public years: number[] = [];
  public cuntryCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private holidayService: HolidayService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      if (response['country']) {
        this.holiday = response['country'];
        this.holiday = this.route.snapshot.data['country'];
        this.selectedYear = new Date().getFullYear();
        this.years = this.generateYears(2020, 2030);
        this.loadHolidays();
      }
    });
  }

  loadHolidays(): void {
    const countryCode = this.holiday?.countryCode;
    if (countryCode) {
      this.holidayService.getHolidays(countryCode, this.selectedYear).subscribe(
        (data) => {
          this.holidays = data;
        },
        (error) => {
          console.error('Error fetching holidays:', error);
        }
      );
    }
  }

  generateYears(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  onYearChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear = Number(selectElement.value);
    this.loadHolidays();
  }
}
