import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { AdminChennaiMoviesComponent } from './adminComponents/admin-chennai-movies/admin-chennai-movies.component';
import { AdminMoviesComponent } from './adminComponents/admin-movies/admin-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditChennaiComponent } from './adminComponents/admin-edit-chennai/admin-edit-chennai.component';
import { AdminAddChennaiComponent } from './adminComponents/admin-add-chennai/admin-add-chennai.component';
import { TheatreCompComponent } from './theatreComponents/theatre-comp/theatre-comp.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

import { SeatComponent } from './seatComponents/seat/seat.component';
import { SeatsComponent } from './seatComponents/seats/seats.component';
import { UserDetailsComponent } from './adminComponents/user-details/user-details.component';
import { ViewUserComponent } from './userDetails/view-user/view-user.component';
import { EditUserComponent } from './userDetails/edit-user/edit-user.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { HomePageComponent } from './homeComponents/home-page/home-page.component';
import { BookingComponent } from './booking/booking.component';
import { QRCodeModule } from 'angularx-qrcode';
import { WalletComponentComponent } from './userDetails/wallet-component/wallet-component.component';
import { HistoryComponent } from './userDetails/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultHomeComponent,
    AdminChennaiMoviesComponent,
    AdminMoviesComponent,
    AdminEditChennaiComponent,
    AdminAddChennaiComponent,
       TheatreCompComponent,
       LoginComponent,
       SignupComponent,

       UserDetailsComponent,
       SeatComponent,
       SeatsComponent,
       ViewUserComponent,
       EditUserComponent,
       PaymentComponent,
       AdminLoginComponent,
       HomePageComponent,
       BookingComponent,
       WalletComponentComponent,
       HistoryComponent,
       
       
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
