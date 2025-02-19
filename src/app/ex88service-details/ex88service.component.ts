import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex88serviceService } from '../ex88service.service';

@Component({
  selector: 'app-ex88service',
  standalone: false,
  templateUrl: './ex88service.component.html',
  styleUrl: './ex88service.component.css'
})
export class Ex88serviceComponent {
  selectedProduct:any
  constructor(private activateRoute:ActivatedRoute,private _fs:Ex88serviceService,
  private router:Router)
  {
  activateRoute.paramMap.subscribe(
  (param)=>{
  let id=param.get('id')
  if(id!=null)
  {
  this.selectedProduct=_fs.getProductDetail(id)
  }
  }
  )
  }
  goBack(){
  this.router.navigate(['service-product-image-event'])
  }
}
