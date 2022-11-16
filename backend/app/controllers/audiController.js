const AudiModel = require("../model/audiModel.js")

exports.create = async(req,res) =>{
    if(!req.body.Audi_id && !req.body.Theatre_id && ! req.body.Capacity &&
        !req.body.Seat_type && !req.body.Seat_type && !req.body.Screen_type
        && !req.body.Seat_rows && !req.body.Seat_cols && !req.body.seat_ids)
        {
            res.status(400).send({message: 'Contents cannot be empty!!'})
        }
// HAVE TO ADD THEATRE ID CHECH (WHETHER IT EXISTS OR NOT). IF THEATRE ID DOESN'T EXIST THEN AUDI CAN'T BE ADDED 
    const audi = new AudiModel({
        Audi_id : req.body.Audi_id,
        Theatre_id : req.body.Theatre_id,
        Capacity : req.body.Capacity,
        Seat_type : req.body.Seat_type,
        Screen_type : req.body.Screen_type,
        Seat_rows : req.body.Seat_rows,
        Seat_cols : req.body.Seat_cols,
        seat_ids : req.body.seat_ids
    })

    await audi
    .save()
    .then((data)=>{
        res.send({
            message : "Audi registered successfully",
            audi : data
        })
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error occured while adding data"
        })
    })
}


exports.findAll = async(req,res)=>{
    await AudiModel.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error occured while retreiving data"
        })
    })
}

exports.findOne = async(req,res)=>{
    await AudiModel.findById(req.params.Audi_id)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message:"audi not found with id "+req.params.Audi_id
            })
        }
        res.send(data)
    })
    .catch((err)=>{
        if(err.kind === "ObjectId"){
            return res.status(404).send({
                message : "audi not found with id: "+req.params.Audi_id
            })
        }
        return res.status(500).send({
            message:"Error retreiving audi with id "+req.params.Audi_id
        })
    })
}

exports.update = async(req,res)=>{
    await AudiModel.findByIdAndUpdate(
        req.params.Audi_id,
        {
            Audi_id : req.body.Audi_id,
            Theatre_id : req.body.Theatre_id,
            Capacity : req.body.Capacity,
            Seat_type : req.body.Seat_type,
            Screen_type : req.body.Screen_type,
            Seat_rows : req.body.Seat_rows,
            Seat_cols : req.body.Seat_cols,
            seat_ids : req.body.seat_ids
        },
        {new:true}
        )
        .then((data)=>{
            if(!data){
                return res.status(404).send({
                    message:"Audi not found with id "+req.params.Audi_id
                })
            }
            res.send(data)
        })
        .catch((err)=>{
            if(err.kind === "ObjectId"){
                return res.status(404).send({
                    message : "Audi not found with id: "+req.params.Audi_id
                })
            }
            return res.status(500).send({
                message:"Error updating audi with id "+req.params.Audi_id
            })
        })
}

/* exports.destroy = async(req,res)=>{
    await AudiModel.findByIdAndRemove(req.params.id)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message:"Audi not found with id "+req.params.id
            })
        }
        res.send({message:"Audi Deleted Successfully!!"})
    })
    .catch((err)=>{
        if(err.kind === "ObjectId" || err.name ==="NotFound"){
            return res.status(404).send({
                message:"Audi not found with Id"+req.params.id
            })
        }
        return res.status(500).send({
            message:"Could not delete audi with Id"+req.params.id
        })
    })
}
 */

exports.destroy = async (req,res) =>{



    await AudiModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`Audi not found ${req.params.id}`});


        }else{
            res.status(200).json({message:`Audi found and deleted`});
        }
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
};



/*
const TheatreModel = require('../model/theatreModel');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.theatreId && !req.body.theatreName && !req.body.theatreCapacity && !req.body.theatreType && !req.body.audis){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const  theatre= new TheatreModel({
        theatreId:req.body.theatreId,
        theatreName :req.body.theatreName,
        theatreCapacity :req.body.theatreCapacity,
        theatreType :req.body.theatreType,
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
*/