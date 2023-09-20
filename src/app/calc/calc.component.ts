import { Component } from '@angular/core';

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
    }
  }

}
