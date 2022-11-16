import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  userName!: FormControl;
  userPassword!: FormControl;


  constructor(private route: Router,private sharingService: SharingService,private adminService:AdminService) {
    this.getAllAdmins();

   }
   admins: any = [];
   adminVal!: Admin;
   onlogin() {
    let check = 0;


    for (let i = 0; i < this.admins.length; i++) {
      if (this.admins[i].adminId == this.loginForm.value.userName && this.admins[i].adminPassword == this.loginForm.value.userPassword) {

        check = 1;
        //console.log(this.users[i]._id);
        // console.log('Reply from login service')
        //console.log(this.loginservice.getUserById(this.users[i]._id))
        //console.log(this.users[i]._id);

        //console.log(this.users.length);
        this.adminVal = this.admins[i];
        // console.log(this.userVal);
        this.sharingService.setAdmin(this.adminVal);

        let rout='/admin';
        //console.log(rout);
        this.route.navigate([rout]);
        //console.log(this.users.length);
      }
    }
    if (check == 0) {
      
      alert("Enter valid admin name and password")

    }

  }
  
   
  ngOnInit(): void {
    this.userName = new FormControl('', [Validators.required]);
        this.userPassword = new FormControl('', [Validators.required]);


        this.loginForm = new FormGroup({
          'userName': this.userName,
          'userPassword': this.userPassword
        })
  }
  getAllAdmins() {
    this.adminService.getAdmins().subscribe((admdata) => {
      this.admins = admdata;

    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }


}
