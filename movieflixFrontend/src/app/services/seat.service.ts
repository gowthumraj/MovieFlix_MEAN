import { Injectable } from '@angular/core';
import { MockData } from '../mock-data/mock-seats-data';
import { Seat } from '../models/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  
  addProduct(newProduct: Seat) {
    this.products.push(newProduct);
  }

  products : Seat[] = [];
  constructor() { 
    this.products = [
      {
          "row" : "A",
          "col" : "1",
          "seatname" : "A1",
          "occupied" : true
      },
      {
          "row" : "A",
          "col" : "2",
          "seatname" : "A2",
          "occupied" : true
      },
      {
          "row" : "A",
          "col" : "3",
          "seatname" : "A3",
          "occupied" : true
      },
      {
          "row" : "A",
          "col" : "4",
          "seatname" : "A4",
          "occupied" : true
      },
      {
          "row" : "A",
          "col" : "5",
          "seatname" : "A5",
          "occupied" : true
      },
      {
          "row" : "B",
          "col" : "1",
          "seatname" : "A6",
          "occupied" : true
      },
      {
          "row" : "B",
          "col" : "2",
          "seatname" : "A7",
          "occupied" : true
      },
      {
          "row" : "B",
          "col" : "3",
          "seatname" : "A8",
          "occupied" : true
      },
      {
          "row" : "B",
          "col" : "4",
          "seatname" : "A9",
          "occupied" : true
      },
      {
          "row" : "B",
          "col" : "5",
          "seatname" : "A10",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "1",
          "seatname" : "A11",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "2",
          "seatname" : "A12",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "3",
          "seatname" : "B1",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "4",
          "seatname" : "B2",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B3",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B4",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B5",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B6",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B7",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B8",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B9",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B10",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B11",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "B12",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C1",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C2",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C3",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C4",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C5",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C6",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C7",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C8",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C9",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C10",
          "occupied" : true
      },
      
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C11",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "C12",
          "occupied" : true
      },
      
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D1",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D2",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D3",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D4",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D5",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D6",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D7",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D8",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D9",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D10",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D11",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "D12",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "E1",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "E2",
          "occupied" : true
      },
      {
          "row" : "C",
          "col" : "5",
          "seatname" : "E3",
          "occupied" : true
      },

  ];
  }

  getSeats() : Seat[]{
    return this.products;
  }


}