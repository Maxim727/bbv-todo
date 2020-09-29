import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList;


  addItem(title): void{
    // this.todoList.push({title})
    this.todoList = this.todoListService.addItem({title});
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  constructor(private todoListService:ServiceService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
