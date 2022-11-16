/*const movieModel = require('../model/movie');

//create and save a new movie

exports.create = async (req,res) => {
    if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const movie = new movieModel({
        email:req.body.email,
        firstName :req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone
    });

    await movie.save().then(data =>{
        res.send({
            message: "movie Added Successfully",
            movie : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "movie Not Added Successfully",
        });
    });
}; //end of create movie

//Retrieve all movies from the database
exports.findAll = async (req,res) =>{
    try{
        const movies = await movieModel.find();
        res.status(200).json(movies);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single movie with an id
exports.findOne = async (req,res) =>{
    try{
        const movie = await movieModel.findById(req.params.id);
        res.status(200).json(movie);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete movie by id
exports.destroy = async (req,res) =>{
    await movieModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`movie not found`});
        }else{
            res.status(200).json({message:`movie found and deleted`});
        }
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
};

//update movie by id 

exports.update = async(req,res) =>{
    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty!!!"});
    }

    const movieid = req.params.id;

    await movieModel.findByIdAndUpdate(movieid,req.body,{ movieFindAndModify : false})
                                     .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`movie not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};


*/


const MovieModel = require('../model/movieModel');

//create and save a new movie

exports.create = async (req, res) => {
    /* if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
         res.status(400).send({message:"Content cannot be empty!!!"});
     }*/

    const movie = new MovieModel({
        movieId: req.body.movieId,
        name: req.body.name,
        genre: req.body.genre,
        image_url: req.body.image_url,
        language: req.body.language,
        duration: req.body.duration,
        rating: req.body.rating,
        actors: req.body.actors,
        audi_ids: req.body.audi_ids,
        movieLocation:req.body.movieLocation,

    });

    await movie.save().then(data => {
        res.send({
            message: "Movie Added Successfully",
            movie: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Movie Not Added Successfully",
        });
    });
}; //end of create movie

//Retrieve all movies from the database
exports.findAll = async (req, res) => {
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    } catch {
        res.status(404).json({ message: error.message })
    }
}

//Retreive a single movie with an id

exports.findOne = async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.params.id);
        res.status(200).json(movie);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};


//delete movie by id
exports.destroy = async (req, res) => {
    await MovieModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).json({ message: `Movie not found` });
        } else {
            res.status(200).json({ message: `Movie found and deleted` });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//update movie by id 

exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data to update cannot be empty!!!" });
    }

    const movieId = req.params.id;

    await MovieModel.findByIdAndUpdate(movieId, req.body, { movieFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Movie not found` });
            } else {
                res.send({ message: "Data updated successfully!!!" })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};