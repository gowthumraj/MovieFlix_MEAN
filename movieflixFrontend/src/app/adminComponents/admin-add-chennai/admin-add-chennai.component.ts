import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServices} from '../../services/movie-services.service';
import { Movie} from '../../models/movie'

@Component({
  selector: 'app-admin-add-chennai',
  templateUrl: './admin-add-chennai.component.html',
  styleUrls: ['./admin-add-chennai.component.css']
})
export class AdminAddChennaiComponent implements OnInit {

  formSubmitted = false;
  addMovForm!: FormGroup;
  movieData : Movie[] = [];
  movieId!:FormControl;
  name!: FormControl;
  genre!: FormControl;
  image_url!: FormControl;
  language!: FormControl;
  duration!:FormControl;
  rating!:FormControl;
  actors!:FormControl;
  audi_ids!:FormControl;
  
 
  constructor(
    private acRoute:ActivatedRoute,
    private movService:MovieServices,
    private router:Router
  ) { 
   
  }

  ngOnInit(): void {
    this.movieId = new FormControl('',[Validators.required,Validators.minLength(3),this.noWhitespaceValidator]);
    this.name = new FormControl('',[Validators.required,this.noWhitespaceValidator]);
    this.genre = new FormControl('',[Validators.required,this.noWhitespaceValidator]);
    this.image_url = new FormControl('',[Validators.required,this.noWhitespaceValidator]);
    this.language = new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$'),this.noWhitespaceValidator]);
    this.duration = new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$'),this.noWhitespaceValidator]);
    this.rating = new FormControl('',[Validators.required,Validators.pattern('^[0-9]{1}$'),this.noWhitespaceValidator]);
    this.actors = new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3),this.noWhitespaceValidator,
      Validators.pattern('^[a-zA-Z ]*$')]);
    this.audi_ids = new FormControl('',[Validators.required,Validators.minLength(3),this.noWhitespaceValidator]);

    this.addMovForm = new FormGroup({
      'movieId':this.movieId,
      'name' : this.name,
      'genre' : this.genre,
      'image_url' : this.image_url,
      'language' : this.language,
      'duration':this.duration,
      'rating':this.rating,
      'actors':this.actors,
      'audi_ids':this.audi_ids
    });
  }
  addMovie(){
    console.log("add Movie...");
    this.formSubmitted = true;
    if(window.confirm("are you sure???")){
      let movid = this.acRoute.snapshot.paramMap.get('movid');
      this.movService.addMovie(this.addMovForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/movie');
          console.log('Movie added successfully')
          
        },
        error : (e :any) =>{
          console.log(e)
        }
      }); 
    }
}
completeLogin(){   
  
  this.addMovForm.reset();  
  // calling this method will reset the method
     
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  


  }
