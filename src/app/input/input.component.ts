import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';



  @Output() submit: EventEmitter<string> = new EventEmitter;

  title: string = 'my title';

  constructor() {
    this.title = 'Hello Angular';
    this.changeTitle('It has been changed')
   }

   changeTitle(newTitle: string):void {
    this.submit.emit(newTitle)

  }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(1500)
    ).subscribe(() => this.successMessage = '');
  }

  public changeSuccessMessage() {
    this._success.next('New task has been added to your list');
  }

  }








