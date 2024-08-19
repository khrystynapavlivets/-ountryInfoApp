# CountryInfo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Огляд проекту

Проект "CountryInfo" – це Angular додаток, який надає інформацію про країни. Користувачі можуть шукати країни, переглядати деталі їхніх свят, перемикатися між роками для перегляду свят та відображати сусідні країни.

## Конфігурація середовища

Файл конфігурації середовища знаходиться в `src/environments/environment.ts`:

## Сервіси

`src/app/shared/services/country.service.ts`
Сервіс для отримання інформації про країни.

`src/app/shared/services/holiday.service.ts`
Сервіс для отримання свят для певної країни та року.

`src/app/shared/services/random-countries.service.ts`
Сервіс для отримання свят для випадкових країн.

## Resolver

`src/app/shared/resolve/country.resolver.ts`
Для отримання інформації про країну за вказаним кодом

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
