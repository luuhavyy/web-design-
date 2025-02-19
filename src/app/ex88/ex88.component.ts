import { Component } from '@angular/core';
import { Ex88serviceService } from '../ex88service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex88',
  standalone: false,
  templateUrl: './ex88.component.html',
  styleUrl: './ex88.component.css'
})
export class Ex88Component {
  public products:any
constructor(pservice: Ex88serviceService, private router:Router){
this.products=pservice.getProductsWithImages()
}
viewDetail(f:any)
{
this.router.navigate(['service-product-image-event',f.ProductId])
}
}
