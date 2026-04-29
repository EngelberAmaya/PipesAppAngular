import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'traslationSpanish',
})
export class TraslationSpanishPipe implements PipeTransform {

  transform(value: keyof Hero | null): string {
    return value === 'name' ? 'nombre'
      : value === 'canFly' ? 'puede volar'
      : value === 'color' ? 'color'
      : value === 'creator' ? 'creador'
      : '';
  }

}
