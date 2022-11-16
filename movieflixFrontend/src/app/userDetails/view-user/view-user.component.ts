import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user!:User;
  loc!: String;
  

  constructor(private sharingService:SharingService,private route: Router) { 
    this.getUser();
    this.getLocation();
  
  }

  ngOnInit(): void {
  }
  getUser(){
    
       
    this.user=this.sharingService.getUser();
    console.log("Checking Values ")
    console.log(this.user._id)
    
    
  }
  logout(){
    if(window.confirm('Are You sure?')){
    this.sharingService.clearUser();
    this.route.navigate(['/login']);
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
