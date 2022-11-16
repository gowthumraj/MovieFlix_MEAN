import { Component, OnInit } from '@angular/core';
import { MockData } from '../../mock-data/mock-seats-data';
import { Seat } from 'src/app/models/seat';
import { SeatService } from 'src/app/services/seat.service';
import { SeatComponent } from '../seat/seat.component';
import { SharingService } from 'src/app/services/sharing.service';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';
import { Time1 } from 'src/app/models/time';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  user!: User;

  movie!: Movie;
  theatre!: Theatre;
  time1!: Time1;
  seatVal!: Seat;
  enteredValue = 0;
  finalValue = 0;

  seats: Seat[] = [];
  seatsSelected: String[] = [];

  toggle = true;
  status = 'Enable';
  loc!: String;




  constructor(private seatService: SeatService, private route: Router, private sharingService: SharingService) {
    this.seats = [
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
    //this.seats = seatService.getSeats();
    this.getMovie();
    this.getTheatre();
    this.getTheatreTime();
    this.getUser();
    this.getLocation();
  }

  ngOnInit(): void {
  }
  enableDisableRule(seat:Seat) {
   
    
    if (seat.occupied==true) {
      this.finalValue = this.finalValue + 1;
      seat.occupied = !seat.occupied;
      this.seatsSelected.push(seat.seatname);
      console.log(this.seatsSelected);
      console.log(seat.seatname);
      console.log(seat.occupied);



    }
    else {

      this.finalValue = this.finalValue - 1;
      seat.occupied = !seat.occupied;
      const index = this.seatsSelected.indexOf(seat.seatname, 0);
      if (index > -1) {
        this.seatsSelected.splice(index, 1);
      }
      console.log("from line 385")
  
      console.log(this.seatsSelected);
      console.log(this.finalValue);

    }
   
    this.sharingService.setTotalSeats(this.finalValue);
    this.sharingService.setSeatNumbers(this.seatsSelected);

    //this.status = this.toggle ? 'Enable' : 'Disable';
  }


  changeColor() {
    this.movie = this.sharingService.getUser();
  }

  getMovie() {
    this.movie = this.sharingService.getMovie();
  }

  getTheatre() {
    this.theatre = this.sharingService.getTheatre();
    console.log(this.theatre);
  }
  getTheatreTime() {

    this.time1 = this.sharingService.getTheatreTime();
    console.log("from time deatisl")
    console.log(this.time1);
    console.log("from time deatisl")
  }

  updateValue() {
    this.finalValue = this.enteredValue;
  }

  logout() {
    if (window.confirm('Are You sure?')) {
      this.sharingService.clearUser();
      this.route.navigate(['/login']);
    }

  }
  getUser() {
    this.user = this.sharingService.getUser();
  }

  search(searchinp: String) {
    window.alert("Movie not found");
    }
payment(){
  if(this.finalValue==0)
  {
    alert("Please select a seat to make payment")
  } 
  else {
    this.route.navigate(['/home/payment']);
  }
}
getLocation(){
  this.loc=this.sharingService.getLocation();
  console.log("From getlocation");
        console.log(this.loc);
}

}


