import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { AdminMoviesComponent } from './adminComponents/admin-movies/admin-movies.component';
import { AdminChennaiMoviesComponent } from './adminComponents/admin-chennai-movies/admin-chennai-movies.component';
import { AdminEditChennaiComponent } from './adminComponents/admin-edit-chennai/admin-edit-chennai.component';
import { AdminAddChennaiComponent } from './adminComponents/admin-add-chennai/admin-add-chennai.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { TheatreCompComponent } from './theatreComponents/theatre-comp/theatre-comp.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SeatComponent } from './seatComponents/seat/seat.component';
import { SeatsComponent } from './seatComponents/seats/seats.component';
import { UserDetailsComponent } from './adminComponents/user-details/user-details.component';
import { ViewUserComponent } from './userDetails/view-user/view-user.component';
import { EditUserComponent } from './userDetails/edit-user/edit-user.component';
import { PaymentComponent } from './payment/payment.component';
import { HomePageComponent } from './homeComponents/home-page/home-page.component';
import { BookingComponent } from './booking/booking.component';
import { WalletComponentComponent } from './userDetails/wallet-component/wallet-component.component';
import { HistoryComponent } from './userDetails/history/history.component';



const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'home',component:DefaultHomeComponent},
  {path : 'home/homepage',component:HomePageComponent},
  {path : 'admin/login',component:AdminLoginComponent},
  {path : 'home/movies',component:AdminMoviesComponent},
  {path : 'home/admchennai',component:AdminChennaiMoviesComponent},
  {path : 'home/admeditchennai/:movid',component:AdminEditChennaiComponent,},
  {path : 'home/admaddchennai',component:AdminAddChennaiComponent},
  {path : 'home/theatre',component:TheatreCompComponent},
  {path : 'admin',component:AdminMoviesComponent},
  {path : 'home/seat',component:SeatsComponent},
  {path : 'admin/user',component:UserDetailsComponent},
  {path : 'home/viewuser',component:ViewUserComponent},
  {path : 'home/edituser/:id',component:EditUserComponent},
  {path : 'home/payment',component:PaymentComponent},
  {path : 'home/booking',component:BookingComponent},
  {path:'home/wallet',component:WalletComponentComponent},
  {path :'home/history',component:HistoryComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
