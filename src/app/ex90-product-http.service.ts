import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './classes/IProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  private _url:string="./assets/ex90/data/products.json";
  constructor(private _http: HttpClient) { }
  getProducts():Observable<IProduct[]>{
  return this._http.get<IProduct[]>(this._url)
  }
}
