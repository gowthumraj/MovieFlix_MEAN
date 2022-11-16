const TheatreModel = require('../model/theatreModel');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.theatreId && !req.body.theatreName && !req.body.theatreCapacity && !req.body.theatreType &&!req.body.showTime && !req.body.audis){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const  theatre= new TheatreModel({
        theatreId:req.body.theatreId,
        theatreName :req.body.theatreName,
        theatreCapacity :req.body.theatreCapacity,
        theatreType :req.body.theatreType,
        showTime:req.body.showTime,
        audis :req.body.audis,
       
    });

    await theatre.save().then(data =>{
        res.send({
            message: "Theatre Added Successfully",
            theatre : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Theatre Not Added Successfully",
        });
    });
}; //end of create user

exports.findAll = async (req,res) =>{
    try{
        const theatres = await TheatreModel.find();
        res.status(200).json(theatres);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const theatre = await TheatreModel.findById(req.params.id);
        res.status(200).json(theatre);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await TheatreModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`Theatre not found`});
        }else{
            res.status(200).json({message:`Theatre found and deleted`});
        }
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
};

//update user by id 

exports.update = async(req,res) =>{
    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty!!!"});
    }

    const id = req.params.id;

    await TheatreModel.findByIdAndUpdate(id,req.body,{ userFindAndModify : false})
                                    .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`Theatre not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};