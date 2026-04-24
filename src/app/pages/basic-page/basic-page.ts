import { Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
  nameLower = signal('engelber');
  nameUpper = signal('ENGELBER');
  fullName = signal('EngeLbeR AmaYa');
}
