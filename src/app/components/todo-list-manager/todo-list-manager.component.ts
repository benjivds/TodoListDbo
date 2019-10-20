import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/interface/todo-item';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list-manager',
  templateUrl: './todo-list-manager.component.html',
  styleUrls: ['./todo-list-manager.component.scss']
})
export class TodoListManagerComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {

  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }
  
}
