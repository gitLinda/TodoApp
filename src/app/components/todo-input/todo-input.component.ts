import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  todoName: string;
  todoValue: string;
  @Input() todoList: Array<Todo>;

  ngOnInit(): void {
  }

  addTodo() {
    this.todoList.push({name: this.todoName, value: this.todoValue});
    this.todoName = '';
    this.todoValue = '';
  }

}
