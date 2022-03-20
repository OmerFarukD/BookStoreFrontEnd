import { ToastrService } from 'ngx-toastr';
import { Book } from './../../Models/book';
import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
cartItems:CartItem[]=[];

  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
this.cartItems = this.cartService.list();
}
removeFromCart(book:Book){
this.cartService.removeFromCart(book);
this.toastrService.error(book.bookName,"Sepetten Silindi.")
}
}
