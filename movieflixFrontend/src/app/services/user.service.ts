import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:7070/user';

  constructor(private http:HttpClient) { }

  //to get list of User
  getUsers():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get user details for single user using id
  getUserById(useid: any):Observable<any>{
    return this.http.get(`${this.uri}/${useid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new user
  addUser(user : User):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,user).pipe(catchError(this.errorMgmt));
  }

  //update User
  updateUser(id: any,user: User) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,user).pipe(catchError(this.errorMgmt));
  }

    //delete User
    deleteUser(id: any) :Observable<any>{
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
