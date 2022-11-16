import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  uri = 'http://localhost:7070/admin';

  constructor(private http:HttpClient) { }

  //to get list of Admin
  getAdmins():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get admin details for single admin using id
  getAdminById(useid: any):Observable<any>{
    return this.http.get(`${this.uri}/${useid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new admin
  addAdmin(admin : Admin):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,admin).pipe(catchError(this.errorMgmt));
  }

  //update Admin
  updateAdmin(id: any,admin: Admin) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,admin).pipe(catchError(this.errorMgmt));
  }

    //delete Admin
    deleteAdmin(id: any) :Observable<any>{
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
