import { BookAddComponent } from './components/book-add/book-add.component';
import { BookComponent } from './components/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:BookComponent},
  {path:"books/category/:categoryId",component:BookComponent},
  {path:"books",component:BookComponent},
  {path:"books/add",component:BookAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
