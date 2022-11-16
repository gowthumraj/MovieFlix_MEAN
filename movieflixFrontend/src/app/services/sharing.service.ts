import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private userDetails : string="userDetails";
  private movieDetails : string="movieDetails";
  private theatreDetails : string="theatreDetails";
  private adminDetails : string="adminDetails";
  private totalSeats : string = 'totalSeats';
  private timeDetails: string='timeDetails';
  private locationDetails:string='locationDetails';
  private seatNumbers:string='seatNumbers';

  
  userVal!: User;

  constructor() { }
  setUser(userVal: any) {
    localStorage.setItem(this.userDetails, JSON.stringify(userVal));
  //  console.log("from sharing set user service");
   // console.log(userVal)
  }

  getUser() {
    let userVal = localStorage.getItem(this.userDetails);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(userVal || '{}');
  }

  clearUser() {
    localStorage.removeItem(this.userDetails);
  }

  cleanAll() {
    localStorage.clear()
  }


//location
setLocation(locationVal: any) {
  localStorage.setItem(this.locationDetails, JSON.stringify(locationVal));
//  console.log("from sharing set user service");
 // console.log(userVal)
}

getLocation() {
  let locationVal = localStorage.getItem(this.locationDetails);
//  console.log("from sharing get user service");
 // console.log(userVal)
  
  return JSON.parse(locationVal || '{}');
}

clearLocation() {
  localStorage.removeItem(this.locationDetails);
}

  //movie
  setMovie(movieVal: any) {
    localStorage.setItem(this.movieDetails, JSON.stringify(movieVal));
  //  console.log("from sharing set user service");
   // console.log(userVal)
  }

  getMovie() {
    let movieVal = localStorage.getItem(this.movieDetails);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(movieVal || '{}');
  }

  clearMovie() {
    localStorage.removeItem(this.movieDetails);
  }




  //theatre
  setTheatre(theatreVal: any) {
    localStorage.setItem(this.theatreDetails, JSON.stringify(theatreVal));
  //  console.log("from sharing set user service");
   // console.log(userVal)
  }
  setTheatreTime(time:any){
    localStorage.setItem(this.timeDetails, JSON.stringify(time));
  }

  getTheatreTime(){
    let timeVal = localStorage.getItem(this.timeDetails);
    return JSON.parse(timeVal || '{}');
    

  }
  getTheatre() {
    let theatreVal = localStorage.getItem(this.theatreDetails);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(theatreVal || '{}');
  }

  clearTheatre() {
    localStorage.removeItem(this.theatreDetails);
  }

  cleanTheatre() {
    localStorage.clear()
  }


  //totalSeats
  setTotalSeats(total_seats:Number){
    localStorage.setItem(this.totalSeats,JSON.stringify(total_seats));
  }

  getTotalSeats(){
    return localStorage.getItem(this.totalSeats);
  }
  clearSeats() {
    localStorage.removeItem(this.totalSeats);
  }



  setSeatNumbers(seatnumbers: any) {
    localStorage.setItem(this.seatNumbers, JSON.stringify(seatnumbers));
    console.log("from sharing get setseatnumber service");
  }

  getSeatNumbers() {
    let seatNumbers = localStorage.getItem(this.seatNumbers);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(seatNumbers || '{}');
  }

  clearseatNumbers() {
    localStorage.removeItem(this.seatNumbers);
  }


  //Admin
  setAdmin(adminVal: any) {
    localStorage.setItem(this.adminDetails, JSON.stringify(adminVal));
  }

  getAdmin() {
    let adminVal = localStorage.getItem(this.adminDetails);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(adminVal || '{}');
  }

  clearAdmin() {
    localStorage.removeItem(this.adminDetails);
  }


}
