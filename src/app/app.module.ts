import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListManagerComponent } from './components/todo-list-manager/todo-list-manager.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListService } from './services/todo-list.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListManagerComponent,
    AddItemComponent,
    TodoItemComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
