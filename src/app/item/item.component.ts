import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})



export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  isComplete: boolean = false;

completeItem() {
  this.isComplete = !this.isComplete;
}
}
