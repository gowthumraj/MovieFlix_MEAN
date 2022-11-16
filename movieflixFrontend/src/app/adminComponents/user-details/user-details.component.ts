import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private useService:UserService) { 
    this.getAllUsers();
  }
  users:any=[];


  ngOnInit(): void {
  }
  getAllUsers(){
    this.useService.getUsers().subscribe((usedata)=>{
      this.users=usedata;
      console.log(usedata);
    })
  }

  deleteUser(user :any,index:any){
    if(window.confirm('Are You sure?')){
      this.useService.deleteUser(user._id).subscribe(()=>{
        this.users.splice(index,1);
        this.getAllUsers()
      })
    }
  }
  
}
