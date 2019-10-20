import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListManagerComponent } from './todo-list-manager.component';

describe('TodoListManagerComponent', () => {
  let component: TodoListManagerComponent;
  let fixture: ComponentFixture<TodoListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
