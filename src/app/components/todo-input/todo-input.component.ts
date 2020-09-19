import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor() { }

  todoName: string;
  todoValue: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  capture() {
    this.addTodo.emit({name: this.todoName, value: this.todoValue});
    this.todoName = '';
    this.todoValue = '';
  }

}
