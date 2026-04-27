import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Engelber',
  gender: 'male',
  age: 35,
  address: 'Barquisimeto, Venezuela'
}

const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 27,
  address: 'Caracas, Venezuela'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe ],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css',
})
export default class UncommonPage {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient() {

    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
}
