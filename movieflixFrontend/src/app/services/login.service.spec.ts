import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LoginService } from './login.service';

/*describe('LoginService', () => {
  let loginservice: LoginService;
  let http : HttpClient;
  let httpController : HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginService],
    });
    loginservice = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpClientTestingModule);
  });

  it('service created', () => {
    expect(loginservice).toBeDefined();

  });
});*/

describe('LoginService',()=>{
  let loginService: LoginService;
  let mockHttpClient: HttpClient;
  let uri = 'http://localhost:7070/user';
  
  beforeEach(function() {
    loginService=new LoginService(mockHttpClient)
  });

  it('Shoulde return users',()=>{

    let mockResponse = [
      {userId:'Gowthum', userEmail: 'gowthumraj1998@gmail.com', userPassword : '1234', userLocation: 'Chennai', userLanguage: 'Tamil', userBalance: 1000},
      {userId:'Balakrishna', userEmail: 'balakrishna@gmail.com', userPassword : '1234', userLocation: 'Hyderabad', userLanguage: 'Telugu', userBalance: 2000},
   
    ];

    let response;
    spyOn(loginService,'getUsers').and.returnValue(of(mockResponse));
    loginService.getUsers().subscribe(res=>{response = res});

    expect<any>(response).toEqual(mockResponse);
  });
})

