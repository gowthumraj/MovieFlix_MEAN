import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';
import { MovieServices} from '../services/movie-services.service';
import { Movie } from 'src/app/models/movie';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user!:User;
  Moviename=Movie;
  movieDetails!:Movie;
  Movie:any=[];
  tempValue!:Number;
  temp1Value!:Number;
  loc!: String;
  userData!:User;
  seatNumbers:any=[];
  


  constructor(private sharingService:SharingService,private route: Router,private movService:MovieServices,private loginService:LoginService) {
    this.getUser();
    this.getMovie();
    this.getTotalSeats();
    this.getLocation();
    this.getseatnumbers();
   
  
   }

  ngOnInit(): void {
  }
  getMovie()
{
  this.movieDetails=this.sharingService.getMovie();
}

  getUser(){
    
       
    this.user=this.sharingService.getUser();
    console.log("Checking Values ")
    console.log(this.user._id)
    
    
  }

  getseatnumbers(){
    this.seatNumbers=this.sharingService.getSeatNumbers();

  }
  logout(){
    if(window.confirm('Are You sure?')){
    this.sharingService.clearUser();
    this.route.navigate(['/login']);
    }
  
  }
  totalSeats:any;
  getTotalSeats(){
    this.totalSeats = this.sharingService.getTotalSeats();
  }
  paymentFunc(){
    console.log("from payment");
if (this.user.userBalance>= this.totalSeats*240)
{
  console.log("from payment if cond");
  this.userData=this.sharingService.getUser();
  let id = this.userData._id;
      this.userData.userBalance = Number(this.userData.userBalance) - (this.totalSeats*240);
      this.loginService.updateUser(id,this.userData).subscribe({
        complete :()=>{
          this.route.navigateByUrl('/user');
          console.log('User updated successfully')
        },
        
        error : (e) =>{
          console.log(e)
        }
      
      });
      
      this.sharingService.setUser(this.userData);
  
  alert("Payment successfull ")

  let rout='/home/booking';
  console.log(rout);
  this.route.navigate([rout]);
 
}
else {
  alert("Payment Unsuccessfull due to insufficient Funds ");
  if(window.confirm('Want you add Money to ur Wallet?')){
this.route.navigate(['/home/wallet']);
  }

}

  }
  getLocation(){
    this.loc=this.sharingService.getLocation();
    console.log("From getlocation");
          console.log(this.loc);
  }
  search(moviename:String){

  }


}

export function paymentVerify2(balance:Number,seats:any){
    
  console.log("from payment");
  let result='';
  if (balance>= seats*240)
  {
    console.log("from payment if cond");

//this.tempValue =this.user.userBalance ;
//this.temp1Value = (this.totalSeats*240);

//this.user.userBalance -= this.totalSeats*240;
  result="Payment Succesful";

    let rout='/home/booking';
    console.log(rout);
    //this.route.navigate([rout]);

  }
else {
    result="Payment Unsuccessfull";

  }
  return result;

}