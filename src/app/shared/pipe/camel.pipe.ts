import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camel',
  standalone: true,
})
export class CamelPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (value == undefined) return '';
    return (
      value.substring(0, 1).toLocaleUpperCase() +
      value.substring(1, value.length)
    );
  }
}
