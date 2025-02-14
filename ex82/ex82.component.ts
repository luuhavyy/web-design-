import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex82',
  imports: [CommonModule, FormsModule],
  templateUrl: './ex82.component.html',
  styleUrl: './ex82.component.css'
})
export class Ex82Component {
    onClick(event: any) {
      alert(event.pointerId)
    }
    onSubmit(value: string) {
      alert(value)
    }

    public a: number = 0;
    public b: number = 0;
    public c: string = '';       

    plus(a: number,b: number) {
      this.c = (a + b).toString();
    }

    subtract(a: number,b: number) {
      this.c = (a - b).toString();
    }

    multiply(a: number,b: number) {
      this.c = (a * b).toString();
    }

    divide(a: number,b: number) {
      this.c = b ===0? 'Cannot divide by 0' : (a / b).toString();
    }

    reset() {
      this.a = 0;
      this.b = 0;
      this.c = '';
    }
}
