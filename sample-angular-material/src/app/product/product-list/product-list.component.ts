import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder:string ="";

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.productService.getProudcts().subscribe(data =>{
      this.products = data;
      this.filteredProducts = data;
    })
  }
  
  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open("Product added to cart!","",{
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  applyFilter(event: Event): void {
    let searchTernm = (event.target as HTMLInputElement).value;
    searchTernm = searchTernm.toLowerCase();

    this.filteredProducts = this.products.filter(
      product => product.name.toLowerCase().includes(searchTernm)
    )
    this.sortProducts(this.sortOrder)
  }

  sortProducts(sortValue: string){
    this.sortOrder = sortValue;
    if(this.sortOrder === "priceLowHigh") {
      this.filteredProducts.sort((a,b) => a.price - b.price)
    }else if(this.sortOrder === "priceHighLow") {
      this.filteredProducts.sort((a,b) => b.price - a.price)
    }
  }

}
