import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-i18n-example';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'मराठी' },
    { code: 'de', label: 'German' }
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}
