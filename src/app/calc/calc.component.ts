import { Component, ElementRef, ViewChild } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  type: string;
  click?: any;
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  total: any = 0;
  operator = null;
  second_num = false;
  first_oper: any = null;
  history: string[] = [];

  tiles: Tile[] = [
    { text: 'AC', cols: 1, rows: 1, color: 'white', type: 'button', click: 'clear' },
    { text: '+/-', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },
    { text: '%', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },
    { text: '/', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },

    { text: '7', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '8', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '9', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: 'x', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },

    { text: '4', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '5', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '6', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '-', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },

    { text: '1', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '2', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '3', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '+', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' },

    { text: '.', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'decimal' },
    { text: '0', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'number' },
    { text: '<-', cols: 1, rows: 1, color: '#4E505F', type: 'button' },
    { text: '=', cols: 1, rows: 1, color: '#4E505F', type: 'button', click: 'operator' }
  ];

  factorial(n: number): number {
    if (n === 0) return 1;
    return n * this.factorial(n - 1);
  }

  sqrt() {
    this.total = Math.sqrt(this.total);
  }
  cube() {
    this.total = Math.cbrt(this.total);
  }
  sin() {
    this.total = Math.sin(this.total);
  }
  cos() {
    this.total = Math.cos(this.total);
  }
  tan() {
    this.total = Math.tan(this.total);
  }
  exp() {
    this.total = Math.exp(this.total);
  }
  power(exponent: number) {
    this.total = Math.pow(this.total, exponent);
  }
  ln() {
    this.total = Math.log(this.total);
  }
  log() {
    this.total = Math.log10(this.total);
  }

  eventClick(event: string, param: any = null) {
    switch (event) {
      case 'number':
        if (this.second_num) {
          this.total = param;
          this.second_num = false;
        } else {
          this.total = this.total === 0 ? Number(param) : Number('' + this.total + param);
        }
        break;

      case 'operator':
        if (this.first_oper === null) {
          this.first_oper = Number(this.total);
        } else if (this.operator) {
          const res = this.Calc_function(this.operator, Number(this.total));
          const history_str = `${this.first_oper} ${this.operator} ${this.total} = ${res}`;
          this.history.push(history_str);
          this.total = String(res);
          this.first_oper = res;
        }
        this.operator = param;
        this.second_num = true;
        break;

      case 'clear':
        this.total = 0;
        this.first_oper = null;
        this.operator = null;
        this.second_num = false;
        this.history = [];
        break;

      case 'decimal':
        if (!this.total.includes('.')) this.total += '.';
        break;
    }
  }
  private Calc_function(operator: string, secondNumber: any) {
    switch (operator) {
      case '+':
        return this.first_oper + secondNumber;
      case '-':
        return this.first_oper - secondNumber;
      case 'x':
        return this.first_oper * secondNumber;
      case '/':
        if (secondNumber === 0) {
          return 'division by zero';
        }
        return this.first_oper / secondNumber;
      case '%':
        return this.first_oper * (secondNumber / 100);
      case '+/-':
        return -this.first_oper;
      default:
        return secondNumber;
    }
  }
}
