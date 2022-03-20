import { CartService } from './../../Services/cart.service';
import { Book } from './../../Models/book';
import { BookService } from './../../Services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
books:Book[]=[];
filterText:string=""
constructor(private bookService: BookService,private activatedRoote:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoote.params.subscribe(params=>{
      if(params["categoryId"]){
       this.getAllByCategoryId(params["categoryId"])
      }
      else{
        this.getAll()
      }
    })
  }
getAll(){
  this.bookService.getAll().subscribe(response=>{
    this.books=response.data;
  })
}
getAllByCategoryId(id:number){
  this.bookService.getAllByCategoryId(id).subscribe(response=>{
    this.books=response.data;
  });
}
addToCart(book:Book){
  this.cartService.addToCart(book);
  this.toastrService.success(book.bookName,"Sepete eklendi.")
}
}
