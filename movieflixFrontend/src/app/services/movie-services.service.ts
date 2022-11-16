import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServices {
  movie!: Movie;
  
  setMovie(movie: any) {
    this.movie=movie;
  }

  // getMovieId()
  // {
  //   // const movie  = this.getMovieById(this.MovieId)
  //   // const movieName = movie.name
  //   return this.MovieId ;
  // }

  //main upi url to call express api

  uri = 'http://localhost:7070/movie';

  constructor(private http:HttpClient) { }

  //to get list of movies
  getMovies():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get movie details for single movie using id
  getMovieById(movid: any):Observable<any>{
    return this.http.get(`${this.uri}/${movid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new movie
  addMovie(movie : Movie):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,movie).pipe(catchError(this.errorMgmt));
  }

  //update Movie
  updateMovie(id: any,movie: Movie) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,movie).pipe(catchError(this.errorMgmt));
  }

    //delete Movie
    deleteMovie(id: any) :Observable<any>{
      let url = `${this.uri}/${id}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt));
    }

    //error handling
    errorMgmt(error:HttpErrorResponse){
      let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        //Get client side error
        errorMessage = error.error.message;
      }else{
        //Get server side error
        errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
      }
      console.log(errorMessage);
      return throwError(()=>{
        return errorMessage;
      })
    }

}
