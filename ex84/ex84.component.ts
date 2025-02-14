import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex84',
  imports: [FormsModule],
  templateUrl: './ex84.component.html',
  styleUrl: './ex84.component.css'
})
export class Ex84Component {
  public a: number = 0;
  public b: number = 0;
  public c: number = 0;

  public result: string = '';

  calc() {
    const quadratic = new Quadratic(this.a, this.b, this.c);
    this.result = quadratic.findSolution();
  }

  reset() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = '';
  }
}

export class Quadratic {
  a: number;
  b: number;
  c: number;

  constructor(a: number = 0, b: number = 0, c: number = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  findSolution(): string {
    let result = '';
    if (this.a === 0) {
      if (this.b === 0 && this.c === 0) {
        result = 'Vô số nghiệm'; 
      } else if (this.b === 0 && this.c !== 0) {
        result = 'Vô nghiệm'; 
      } else {
        result = `PT bậc 1 -> x = ${-this.c / this.b}`; 
      }
    } else {

      const delta = this.b * this.b - 4 * this.a * this.c; 
      if (delta < 0) {
        result = 'Vô nghiệm'; 
      } else if (delta === 0) {
        result = `No kép -> x1 = x2 = ${-this.c / (2 * this.a)}`; 
      } else {
        const x1 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        const x2 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        result = `x1 = ${Math.round(x1)}; x2 = ${Math.round(x2)}`; 
      }
    }
    return result;
  }
}

