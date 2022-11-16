import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSubmitted = false;
  addUseForm!: FormGroup;
  userData : User[] = [];
  userId!:FormControl;
  userEmail!: FormControl;
  userLocation!: FormControl;
  userLanguage!: FormControl;
  userBalance!: FormControl;
  userPassword!:FormControl;
  reEnterPassword!:FormControl;
  
  
  




  type : string ="password";
  isText : boolean = false;
  eyeIcon : string ="fa-eye-slash";
  

  constructor(
    private acRoute:ActivatedRoute,private router:Router,private useService:LoginService) { }

  ngOnInit(): void {
    this.userId = new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.userEmail = new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]);
    this.userLocation = new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')]);
    this.userLanguage = new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')]);
    this.userBalance = new FormControl('',[Validators.required]);
    this.userPassword= new FormControl('',[Validators.required,Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
    ),Validators.minLength(8)]);
    this.reEnterPassword= new FormControl('',[Validators.required,Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
    ),Validators.minLength(8)]);
 
    this.addUseForm = new FormGroup({
      'userId':this.userId,
      'userEmail' : this.userEmail,
      'userLocation' : this.userLocation,
      'userLanguage' : this.userLanguage,
      'userBalance' : this.userBalance,
      'userPassword':this.userPassword,
      'reEnterPassword':this.reEnterPassword,
    });
  }


  addUser(){
    console.log("add User...");
    this.formSubmitted = true;
    if(window.confirm("are you sure???")){
      let useid = this.acRoute.snapshot.paramMap.get('useid');
      this.useService.addUser(this.addUseForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/user');
          console.log('User added successfully')
          this.addUseForm.reset();
        },
        error : (e :any) =>{
          console.log(e)
        }
      }); 
    }
}


hideShowPass() {
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-lock" : this.eyeIcon = "fa-lock";
  this.isText ? this.type = "text" : this.type = "password";
}

}