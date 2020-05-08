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
  @Input() todoList: Array<Todo>;
  @Output() updateTodoList: EventEmitter<Array<Todo>> = new EventEmitter<Array<Todo>>();

  addTodo() {
    this.todoList.push({name: this.todoName, value: this.todoValue});
    this.todoName = '';
    this.todoValue = '';
    this.updateTodoList.emit(this.todoList);
  }

}
