import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  currentList: List | null = null;
  constructor() {}

  setCurrentList(person: List) {
    this.currentList = person;
  }
  getCurrentList(): List | null {
    return this.currentList;
  }
}
