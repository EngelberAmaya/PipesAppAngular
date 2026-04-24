import { Component, effect, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
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
}
