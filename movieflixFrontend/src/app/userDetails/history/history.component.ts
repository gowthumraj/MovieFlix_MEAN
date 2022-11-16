import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  user!:User;
  loc!: String;
historys:any=[];  
filteredhistory:any=[];

  constructor(private sharingService:SharingService,private route: Router,private histService:HistoryService) { 
    this.getUser();
    this.getLocation();
    this.getAllHistory();
  
  }

  ngOnInit(): void {
  }
  getAllHistory(){
    this.histService.getHistorys().subscribe((histdata)=>{
      this.historys=histdata;
      var count=0;
      for(let i=0;i<this.historys.length;i++){
        if(this.user.userId==this.historys[i].userName){
          this.filteredhistory[count]=this.historys[i];
          count+=1;
  
        }
      }   
      console.log(histdata);
      console.log("From history ts")
    })
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
