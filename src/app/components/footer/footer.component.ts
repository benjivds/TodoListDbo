import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  subscriptionItem;
  subscriptionCounter;

  counter: number;
  item: number;

  constructor(private todoListService: TodoListService) {
    this.subscriptionItem = this.todoListService.getItems()
      .subscribe(item => this.item = item);
    this.subscriptionCounter = this.todoListService.getCounter()
      .subscribe(counter => this.counter = counter);
  }

  ngOnDestroy() {
    this.subscriptionItem.unsubscribe();
    this.subscriptionCounter.unsubscribe();
  }

  ngOnInit() {
  }

}
