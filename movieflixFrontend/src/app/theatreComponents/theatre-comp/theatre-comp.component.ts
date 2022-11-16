import { Component, OnInit, Input } from '@angular/core';
import { TheatreService } from 'src/app/services/theatre.service';
import { MovieServices } from 'src/app/services/movie-services.service';
import { Theatre } from 'src/app/models/theatre';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { SharingService } from 'src/app/services/sharing.service';
import { User } from 'src/app/models/user';




@Component({
  selector: 'app-theatre-comp',
  templateUrl: './theatre-comp.component.html',
  styleUrls: ['./theatre-comp.component.css']
})

export class TheatreCompComponent implements OnInit {
  @Input()

  user!: User;
  movieDetails!: Movie;
  movies: Movie[] = [];
  loc!: String;
  
  constructor(private theatService: TheatreService, private sharingService: SharingService, private movService: MovieServices, private acRoute: ActivatedRoute, private route: Router) {
    this.getAllTheatres();
    this.getMovie()
    this.getUser();
    this.getLocation();

  }

  // movies:any=[];

  theatres: any = [];
  theatreVal!: Theatre;
  Movie: any = [];



  ngOnInit(): void {



  }


  getAllTheatres() {
    this.theatService.getTheatres().subscribe((thdata) => {
      this.theatres = thdata;
    })
  }

  removeTheatre() {

  }



  getMovie() {
    this.movieDetails = this.sharingService.getMovie();
  }



  onTheatreSelect(thet: any, time: any) {



    this.theatreVal = thet;
    //console.log("from theatre comp")
    // console.log(thet);
    //console.log(time);
    this.sharingService.setTheatre(this.theatreVal);
    this.sharingService.setTheatreTime(time);
  }
  getUser() {


    this.user = this.sharingService.getUser();


  }

  search(searchinp: String) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name == searchinp)
       {
        window.alert("Movie not found");



      }
    }

  }

    logout(){
      if (window.confirm('Are You sure?')) {
        this.sharingService.clearUser();
        this.route.navigate(['/login']);
      }

    }
    getLocation(){
      this.loc=this.sharingService.getLocation();
      console.log("From getlocation");
            console.log(this.loc);
    }


  }



