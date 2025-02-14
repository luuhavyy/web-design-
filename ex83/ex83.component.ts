import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex83',
  imports: [CommonModule, FormsModule],
  templateUrl: './ex83.component.html',
  styleUrl: './ex83.component.css'
})
export class Ex83Component {
    public name: string = ''
    public address: string = ''
    public email: string = ''
    public phone: string = ''

    setDefaultAddress(){
      this.address='13 Hung Vuong street'
    }

    setDefaultEmail() {
      this.email = 'default@example.com';
    }

    setDefaultPhone() {
      this.phone = '123-456-7890';
    }
}
