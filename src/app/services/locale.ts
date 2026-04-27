import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class Locale {

  private currentLocale = signal<AvailableLocale>(
    (localStorage.getItem('locale') as AvailableLocale) || 'es'
  );

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
