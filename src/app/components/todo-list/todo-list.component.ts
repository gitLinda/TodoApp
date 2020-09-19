import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor() { }

  @Input() todoList: Array<Todo>;
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  deleteTodo(todo: Todo): void {
    this.removeTodo.emit(todo);
  }

}
