import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cardItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartSerivce: CartService) {

  }
  ngOnInit(): void {
   this.cartSerivce.getCartItems().subscribe(data => {
    this.cardItems = data;
    this.totalPrice = this.getTotalPrice();
   })
  }

  getTotalPrice(): number {
    let total = 0;
    for(let item of this.cardItems){
      total += item.price;
    }
    return total;
  }
  clearCart(): void {
    console.log("clear cart(0");
    this.cartSerivce.clearCart().subscribe();
  }
  checkout(): void {
    this.cartSerivce.checkout(this.cardItems).subscribe();
  }
}
