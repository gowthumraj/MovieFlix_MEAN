export class Movie{
	movieId : string='';
    name : string='';
    genre : string='';
    image_url:String='';
    language : String='';
    duration : Number=0;
    rating : Number=0;
    actors : Array<String>=[];
    audi_ids: Array<String>=[];
    movieLocation:String='';

    constructor(){
        
    }
}