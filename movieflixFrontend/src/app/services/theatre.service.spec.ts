import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TheatreService } from './theatre.service';

/*describe('TheatreService', () => {
  let service: TheatreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheatreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

describe('TheatreService',()=>{
  let loginService: TheatreService;
  let mockHttpClient: HttpClient;
  let uri = 'http://localhost:7070/user';
  
  beforeEach(function() {
    loginService=new TheatreService(mockHttpClient)
  });

  it('Shoulde return theatres',()=>{

    let mockResponse = [
      {
        theatreId: "101",
        theatreName: "Next Galleria Mall",
        theatreCapacity: 300,
        theatreType: "PVR Cinemas",
        showTime: ["11:00 AM","2:00 PM","6:00 PM"],
        audis: ["AUDI101","AUDI102"]
    },
    {
      theatreId: "102",
      theatreName: "Forum Mall",
      theatreCapacity: 300,
      theatreType: "Asian Cinemas",
      showTime: ["11:00 AM","2:00 PM","6:00 PM"],
      audis: ["AUDI103","AUDI104"]
  }
   
    ];

    let response;
    spyOn(loginService,'getTheatres').and.returnValue(of(mockResponse));
    loginService.getTheatres().subscribe(res=>{response = res});

    expect<any>(response).toEqual(mockResponse);
  });
})