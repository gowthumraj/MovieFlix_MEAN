import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServices} from '../../services/movie-services.service';
import { Movie} from '../../models/movie'


@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

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
