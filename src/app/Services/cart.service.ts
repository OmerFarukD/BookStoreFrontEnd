import { CARTITEMS } from './../Models/cartItems';
import { Book } from './../Models/book';
import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(book:Book){
let item=CARTITEMS.find(c=>c.book.bookId===book.bookId) 
if (item) {
  item.quantity+=1;

}else{
  let cartItem=new CartItem();
  cartItem.book=book
  cartItem.quantity=1
  CARTITEMS.push(cartItem);
}
  }
list():CartItem[]{
return CARTITEMS;
}
removeFromCart(book:Book){
let item=CARTITEMS.find(c=>c.book.bookId===book.bookId)
if(item){
CARTITEMS.splice(CARTITEMS.indexOf(item),1)
}
}
}
