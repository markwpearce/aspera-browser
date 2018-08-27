import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'cancelled':
        return 'pause';
      default:
        return status;
    }
  }
}

@Pipe({ name: 'string' })
export class StringPipe implements PipeTransform {

  transform(str: string): string {
    const max = 35;
    const begin = 10;
    const end = 20;

    if (str.length < max) { return str; }

    return str.substring(0, begin) + '....' + str.substring(end);
  }
}
