import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css',
})
export default class CustomPage {
  name = signal('Engelber Amaya');
  upperCase = signal(true);
}
