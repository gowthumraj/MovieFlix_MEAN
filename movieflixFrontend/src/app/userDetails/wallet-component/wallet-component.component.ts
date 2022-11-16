import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-wallet-component',
  templateUrl: './wallet-component.component.html',
  styleUrls: ['./wallet-component.component.css']
})
export class WalletComponentComponent implements OnInit {

  formSubmitted = false;
  walletForm!:FormGroup;
  username!:FormControl;
  cardNumber!:FormControl;
  cvvNumber!:FormControl;
  amount!:FormControl;
  userData!:User;
  user!:User;
  loc!: String;

  constructor(public fb: FormBuilder,private acRoute:ActivatedRoute,private router:Router,private sharingService:SharingService,private loginService:LoginService) {
    this.getUser();
    this.getLocation();
    
   }
   

  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required,Validators.minLength(3),this.noWhitespaceValidator,Validators.pattern('^[a-zA-Z ]*$')]);
    this.cardNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$'),this.noWhitespaceValidator]);
    this.cvvNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$'),this.noWhitespaceValidator]);
    this.amount=new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'),this.noWhitespaceValidator]);

    
    this.walletForm=new FormGroup({
      'username':this.username,
      'cardNumber':this.cardNumber,
      'cvvNumber':this.cvvNumber,
      'amount':this.amount,
      
    });
  
  }
  editUser(){
    //console.log("edit User...");
    this.userData=this.sharingService.getUser();
    this.formSubmitted = true;
   // console.log("Edit user id use formgrp")
    //console.log(this.editUseForm.value.userId);
    
    if(window.confirm("are you sure???")){
      
      let id = this.userData._id;
      this.userData.userBalance=this.userData.userBalance+this.walletForm.value.amount;
      this.loginService.updateUser(id,this.userData).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/user');
          console.log('User updated successfully')
        },
        
        error : (e) =>{
          console.log(e)
        }
      
      });
      
      this.sharingService.setUser(this.userData);
      alert("Payment Successful!!!!!")
    }
}
getUser(){
    
       
  this.user=this.sharingService.getUser();
  console.log("Checking Values ")
  console.log(this.user._id)
  
  
}

logout(){
  if(window.confirm('Are You sure?')){
  this.sharingService.clearUser();
  this.router.navigate(['/login']);
  }

}
getLocation(){
  this.loc=this.sharingService.getLocation();
  console.log("From getlocation");
        console.log(this.loc);
}
search(moviename:String){
  
}

noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}

}
