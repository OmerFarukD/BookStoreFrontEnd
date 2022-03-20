import { Book } from './../Models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Book[], filterText:string): Book[] {
    filterText=filterText? filterText.toLocaleLowerCase():"";

    return filterText ? value.filter((b:Book)=>b.bookName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
