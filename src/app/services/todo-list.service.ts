import { Injectable } from '@angular/core';
import { TodoItem } from '../interface/todo-item';
import { Subject, Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private countDown: number = 15;

  private todoListLength$ = new Subject<number>();

  private counter$ = new Subject<number>();

  private counter: number = 5;

  private items$ = new Subject<number>();
  private items: number;

  private todoList: TodoItem[] = [
    { title: 'install NodeJS', completed: false, initlist: true },
    { title: 'install Angular CLI', completed: false, initlist: true },
    { title: 'create new app', completed: false, initlist: true },
    { title: 'serve app', completed: false, initlist: true },
    { title: 'develop app', completed: false, initlist: true },
  ];

  constructor() { }

  getTodoList() {
    this.updateAll();
    this.countDownIterator();
    return this.todoList;
  }



  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.updateAll();
  }


  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.updateAll();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.updateAll();
  }

  getListLength(): Observable<number> {
    return this.todoListLength$.asObservable();
  }

  updateListLength() {
    this.todoListLength$.next(this.todoList.length);
  }

  getCounter(): Observable<number> {
    return this.counter$.asObservable();
  }

  updateCounter() {
    this.counter$.next(this.counter);
  }

  getItems(): Observable<number> {
    return this.items$.asObservable();
  }

  updateItems() {
    this.items = this.todoList.filter((obj) => obj.initlist === true).length;
    this.items$.next(this.items);
  }

  updateAll() {
    this.updateCounter();
    this.updateItems();
    this.updateListLength();
  }

  countDownIterator() {
    // lets start the counter to
    const intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      console.log(this.counter);
      if (this.counter === 0 && this.items > 0) {
        let itemsInList = this.todoList.filter((obj) => obj.initlist === true);
        this.deleteItem(itemsInList[0]);
        itemsInList = this.todoList.filter((obj) => obj.initlist === true);
        if (itemsInList.length > 0) {
          this.counter = this.countDown;
        } else {
          clearInterval(intervalId);
        }
      } else {
        this.updateCounter();
      }
    }, 1000)
  }

}
