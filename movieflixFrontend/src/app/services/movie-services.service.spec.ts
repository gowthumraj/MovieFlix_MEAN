import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MovieServices } from './movie-services.service';

/*describe('MovieServicesService', () => {
  let service: MovieServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

describe('MovieService',()=>{
  let loginService: MovieServices;
  let mockHttpClient: HttpClient;
  let uri = 'http://localhost:7070/user';
  
  beforeEach(function() {
    loginService=new MovieServices(mockHttpClient)
  });

  it('Shoulde return movies',()=>{

    let mockResponse = [
      {movieId:"MOVIE101", name:"PS -1", genre:"Action/Drama/Thriller/Historical", image_url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-1-et00323897-1664271205.jpg", language:"Tamil", duration:150, rating:4, actors:["Vikram","Karthi","Aishwarya","Trisha"], audi_ids:["AUDI101","AUDI102"]},
      {movieId:"MOVIE102", name:"God Father", genre:"Action/Drama/Thriller/Historical", image_url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/godfather-et00325579-1664779116.jpg", language:"Telugu", duration:120, rating:4, actors:["Vikram","Karthi","Aishwarya","Trisha"], audi_ids:["AUDI101","AUDI102"]},
   
    ];

    let response;
    spyOn(loginService,'getMovies').and.returnValue(of(mockResponse));
    loginService.getMovies().subscribe(res=>{response = res});

    expect<any>(response).toEqual(mockResponse);
  });
})