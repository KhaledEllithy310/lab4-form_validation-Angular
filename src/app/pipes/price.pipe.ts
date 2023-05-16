import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: Number, ...args: unknown[]): unknown {
    return value + ` EGP `;
  }
}
