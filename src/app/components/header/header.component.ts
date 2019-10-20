import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  listLength: number;
  subscription;

  constructor(private todoListService: TodoListService) {
    this.subscription = this.todoListService.getListLength()
      .subscribe(listLength => this.listLength = listLength);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
