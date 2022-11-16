import { Component, OnInit } from '@angular/core';
import { MovieServices} from '../../services/movie-services.service';
@Component({
  selector: 'app-admin-chennai-movies',
  templateUrl: './admin-chennai-movies.component.html',
  styleUrls: ['./admin-chennai-movies.component.css']
})
export class AdminChennaiMoviesComponent implements OnInit {

  constructor(private movService:MovieServices) { 
    this.getAllMovies();
  }
  movies:any=[];


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
      this.movService.deleteMovie(movie._id).subscribe(()=>{
        this.movies.splice(index,1);
        this.getAllMovies()
      })
    }
  }
  
}
