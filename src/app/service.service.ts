import { Injectable } from '@angular/core';
import { StorageService} from '../app/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
  ];

  constructor(private storage: StorageService) { }

  getTodoList() {
    // return this.todoList;
    return this.storage.get()
  }

  addItem(item) {
    return this.storage.post(item);
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }
}
