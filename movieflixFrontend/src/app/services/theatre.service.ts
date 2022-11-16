import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Theatre } from '../models/theatre';


@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  uri = 'http://localhost:7070/theatre';

  constructor(private http:HttpClient) { }

  //to get list of theatres
  getTheatres():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get theatre details for single theatre using id
  getTheatreById(thid: any):Observable<any>{
    return this.http.get(`${this.uri}/${thid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new theatre
  addTheatre(theatre : Theatre):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,theatre).pipe(catchError(this.errorMgmt));
  }

  //update Theatre
  updateTheatre(id: any,theatre: Theatre) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,theatre).pipe(catchError(this.errorMgmt));
  }

    //delete Theatre
    deleteTheatre(id: any) :Observable<any>{
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
