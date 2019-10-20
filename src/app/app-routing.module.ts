import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListManagerComponent } from './components/todo-list-manager/todo-list-manager.component';

const routes: Routes = [  
  {path:'', component : TodoListManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
