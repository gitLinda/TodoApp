import {Component} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [];

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }

  removeTodo(todo: Todo): void {
    this.todoList = this.todoList.filter(item => item !== todo);
  }
}
