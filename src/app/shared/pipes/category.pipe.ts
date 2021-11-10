import { Pipe, PipeTransform } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value) {
      case 'front-end' : return 'code';
      case 'back-end' : return 'computer';
    }

    return 'code';
  }

}
