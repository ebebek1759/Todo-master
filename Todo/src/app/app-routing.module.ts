import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoComponent } from './todo/todo.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'todos/add', component: TodoAddComponent },
  { path: 'todos/update/:id', component: TodoUpdateComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'users/update/:id', component: UserUpdateComponent },
  { path: 'user-todos/:userId', component: TodoComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
