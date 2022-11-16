import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  uri = 'http://localhost:7070/history';

  constructor(private http:HttpClient) { }

  //to get list of Historys
  getHistorys():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get history details for single history using id
  getHistoryById(histid: any):Observable<any>{
    return this.http.get(`${this.uri}/${histid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new history
  addHistory(history : History):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,history).pipe(catchError(this.errorMgmt));
  }

  //update History
  updateHistory(id: any,history: History) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,history).pipe(catchError(this.errorMgmt));
  }

    //delete History
    deleteHistory(id: any) :Observable<any>{
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
