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
  @Output() updateTodoList: EventEmitter<Array<Todo>> = new EventEmitter<Array<Todo>>();

  deleteTodo(index: number): void {
    this.todoList.splice(index, 1);
    this.updateTodoList.emit(this.todoList);
  }

}
