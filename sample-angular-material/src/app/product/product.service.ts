import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = environment.apiUrl + "/products";

  constructor(
    private httpClient: HttpClient
  ) { }
  getProudcts(): Observable<Product[]> {
    console.log(this.apiUrl);
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

}
