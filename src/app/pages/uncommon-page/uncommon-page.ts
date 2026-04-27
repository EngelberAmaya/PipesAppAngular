import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe
} from '@angular/common';
import { interval, map, take, tap } from 'rxjs';

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
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
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

  // i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Engelber',
    'Ana',
    'Natalia',
    'Miriam',
    'Juan',
    'Carlos',
    'Mario',
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Engelber',
    age: 35,
    address: 'Barquisimeto, Venezuela',
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(1000).pipe(
    take(6),
    map(value => value * 10),
    tap(value => console.log('tap:', value))
  );
}
