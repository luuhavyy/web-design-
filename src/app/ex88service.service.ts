import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ex88serviceService {
  productsImage=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/ex88/h1.jpg"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/ex88/h2.jpg"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/ex88/h3.jpg"},
    ]
    constructor() { }
    getProductsWithImages()
    {
    return this.productsImage
    }
    getProductDetail(id:any){
    return this.productsImage.find(x=>x.ProductId==id)
    }
}
