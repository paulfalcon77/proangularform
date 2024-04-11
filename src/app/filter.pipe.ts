import { Pipe, PipeTransform } from '@angular/core';
import { List } from './list';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(persons: List[], filterSearch: string) {
    if (persons.length === 0 || filterSearch === '') {
      return persons;
    } else {
      return persons.filter((persons) => {
        return (
          persons.name.toLowerCase() === filterSearch.toLowerCase() ||
          persons.Sername.toLowerCase() === filterSearch.toLowerCase()
        );
      });
    }
  }
}
