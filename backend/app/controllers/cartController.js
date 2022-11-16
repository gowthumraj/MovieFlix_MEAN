const CartModel = require('../model/cartModel');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.theatreId && !req.body.audiId && !req.body.movieId && !req.body.seats_booked){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const  theatre= new CartModel({
        theatreId:req.body.theatreId,
        audiId :req.body.audiId,
        movieId :req.body.movieId,
        seats_booked :req.body.seats_booked,

       
    });

    await theatre.save().then(data =>{
        res.send({
            message: "Cart Added Successfully",
            theatre : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Cart Not Added Successfully",
        });
    });
}; //end of create user

exports.findAll = async (req,res) =>{
    try{
        const carts = await CartModel.find();
        res.status(200).json(carts);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const cart = await CartModel.findById(req.params.id);
        res.status(200).json(theatre);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await CartModel.findByIdAndRemove(req.params.id).then(data =>{
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

    await CartModel.findByIdAndUpdate(id,req.body,{ userFindAndModify : false})
                                    .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`Cart not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};