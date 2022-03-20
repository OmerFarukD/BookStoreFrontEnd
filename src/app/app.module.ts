import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule,} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CategoryComponent } from './components/category/category.component';
import { ToastrModule } from 'ngx-toastr'
import { NaviComponent } from './components/navi/navi.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BookAddComponent } from './components/book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CategoryComponent,
    NaviComponent,
    FilterPipe,
    CartSummaryComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
