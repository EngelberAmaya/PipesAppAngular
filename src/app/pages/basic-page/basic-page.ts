import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AvailableLocale, Locale } from '../../services/locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {

  localeService = inject(Locale);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('engelber');
  nameUpper = signal('ENGELBER');
  fullName = signal('EngeLbeR AmaYa');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }
}
