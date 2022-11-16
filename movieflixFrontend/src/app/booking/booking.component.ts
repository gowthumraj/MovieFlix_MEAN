import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { SharingService } from '../services/sharing.service';
import { MovieServices } from '../services/movie-services.service';
import { Movie } from '../models/movie';
import { TheatreService } from '../services/theatre.service';
import { Theatre } from '../models/theatre';
import { Time1 } from '../models/time';
import{ History} from '../models/history'; 
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  user!:User;
  Moviename=Movie;
  movieDetails!:Movie;
  Movie:any=[];
  totalSeats:any;
  theatreDetails!:Theatre;
  time1!:Time1;
  loc!: String;
  seatNumbers:any=[];
  historyId!:String;
  movieName!:String;
  theatreName!:String;
  amountPaid!:String;
  userName!:String;
  historyData!:any;
  

  myAngularQrCode:any;
  constructor(private sharingService:SharingService,private route:Router,private movService:MovieServices,private theatService:TheatreService,private histService:HistoryService) { 
    this.getUser();
    this.getMovie();
    this.getTotalSeats();
    this.getTheatre();
    this.getTheatreTime();
    this.getLocation();
    this.getseatnumbers();
    this.setHistory();
   

    this.myAngularQrCode='Your Qr Code';
  }

  ngOnInit(): void {
  }
  getMovie(){
    this.movieDetails=this.sharingService.getMovie();
  }

  getseatnumbers(){
    this.seatNumbers=this.sharingService.getSeatNumbers();

  }

  getUser(){
    this.user=this.sharingService.getUser();

  }

  getTotalSeats(){
    this.totalSeats=this.sharingService.getTotalSeats();
  }

  getTheatre(){
    this.theatreDetails=this.sharingService.getTheatre();
  }
  getTheatreTime() {

    this.time1 = this.sharingService.getTheatreTime();
    console.log("from time deatisl")
    console.log(this.time1);
    console.log("from time deatisl")
  }

 
  getLocation(){
    this.loc=this.sharingService.getLocation();
    console.log("From getlocation");
          console.log(this.loc);
  }
  search(moviename:String){

  }
  setHistory(){
   /*  this.historyData[0]="Ord"+String(Math.floor(Math.random() * 100));
    this.historyData[1]=this.movieDetails.name;
    this.historyData[2]=this.theatreDetails.theatreName;
    this.historyData[3]=Number(this.totalSeats*240);
    this.historyData[4]=this.user.userId;
    console.log("From history Comp");
    console.log(this.historyData);
    this.histService.addHistory(this.historyData).subscribe({
      complete :()=>{
        this.route.navigateByUrl('/history');
        console.log('History added successfully');

      },
      error : (e :any) =>{
        console.log(e)
      }
    });
 */
    this.historyData ={

      historyId : "Ord"+String(Math.floor(Math.random() * 100)),
      movieName : this.movieDetails.name,
      theatreName: this.theatreDetails.theatreName,
      amountPaid:Number(this.totalSeats*240),
      userName :this.user.userId

      
    };
    this.histService.addHistory(this.historyData).subscribe({
      complete :()=>{
        this.route.navigateByUrl('/history');
        console.log('History added successfully');

      },
      error : (e :any) =>{
        console.log(e)
      }
    });


  }


  logout(){
    if(window.confirm('Are You sure?')){
    this.sharingService.clearUser();
    this.route.navigate(['/login']);
    }
  
  }

}
