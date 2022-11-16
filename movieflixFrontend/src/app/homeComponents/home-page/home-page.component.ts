import { Component, OnInit,Input } from '@angular/core';
import { MovieServices} from '../../services/movie-services.service';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Input() moviename=[];
  searchMovie:string='';

  Moviename=Movie;
  user!:User;
  loc!: String;
  
  constructor(private movService:MovieServices,private sharingService:SharingService,private route: Router) { 
    this.getAllMovies();
    this.getUser();  
  }
  movies:any=[];
  movieVal!:Movie;
  

  ngOnInit(): void {
  }
  getAllMovies(){
    this.movService.getMovies().subscribe((movdata)=>{
      this.movies=movdata;
      console.log(movdata);
    })
  }

  removemovie(movie :any,index:any){
    if(window.confirm('Are You sure?')){
      this.movService.deleteMovie(movie._id).subscribe((data)=>{
        this.movies.splice(index,1);
      })
    }
  }

  passMovie(movie : Movie){
   this.movService.setMovie(movie);
  }
  
logout(){
  if(window.confirm('Are You sure?')){
  this.sharingService.clearUser();
  this.route.navigate(['/login']);
  }

}
  getUser(){
    
       
    this.user=this.sharingService.getUser();
    this.loc=this.user.userLocation;
    this.sharingService.setLocation(this.loc);
  

    
    
  }
  
  search(){
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name == this.searchMovie) {
        window.alert("Movie found");
  }
 
}
}


onMovieSelect(movieVal:Movie){
  
 
 
      this.sharingService.setMovie(movieVal);
   
}
dropLocation(str:any){
  console.log("before changing in dropdown")
  console.log(this.loc);
  
  this.loc=str;
  this.sharingService.clearLocation();
  this.sharingService.setLocation(str);
  console.log("after changing in dropdown")
  console.log(this.loc);
  


}




}