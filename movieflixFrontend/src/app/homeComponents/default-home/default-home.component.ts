import { Component, OnInit,Input } from '@angular/core';
import { MovieServices} from '../../services/movie-services.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {
  @Input() moviename=[];
  

  Moviename=Movie;


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
      this.movService.deleteMovie(movie._id).subscribe((data)=>{
        this.movies.splice(index,1);
      })
    }
  }

  passMovie(movie : Movie){
   this.movService.setMovie(movie);
  }
}