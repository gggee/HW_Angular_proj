import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  getTitle() {
    return 'Hello'
  }
  title = 'Home???';
  sub_header = 'To be or not to be';
  count = 50;

  tiles: Tile[]=[
    {text:'One', cols: 3, rows:1 , color:'lightblue'},
    {text:'Two', cols: 1, rows:2 , color:'lightgreen'},
    {text:'Three', cols: 1, rows:1 , color:'lightpink'},
    {text:'Four', cols: 2, rows:1 , color:'#DDBDF1'}
  ]
}
