import { Pipe, PipeTransform } from '@angular/core';
import {AllData, Freezer} from './storedata';

@Pipe({
  name: 'limitfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
      return array.sort((a: any, b: any) => {
      if ( a[args] < b[args] ) {
        return -1;
      }else if ( a[args] > b[args] ) {
        return 1;
      }else {
        return 0;
      }
    });
  }
}
