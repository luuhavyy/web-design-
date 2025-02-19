import { Component, OnInit } from '@angular/core';
import { Ex89Service } from '../ex89.service';

@Component({
  selector: 'app-ex89',
  standalone: false,
  templateUrl: './ex89.component.html',
  styleUrls: ['./ex89.component.css']
})
export class Ex89Component implements OnInit {
  datas: any[] = [];

  // Injecting Ex89Service vào constructor
  constructor(private ex89Service: Ex89Service) {}

  ngOnInit() {
    // Sử dụng ex89Service để gọi getCategories() và gán dữ liệu cho datas
    this.datas = this.ex89Service.getCategories();
  }
}
