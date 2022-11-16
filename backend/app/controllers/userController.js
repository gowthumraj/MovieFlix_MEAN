const UserModel = require('../model/userModel');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.userId && !req.body.userEmail && !req.body.userPassword ){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const  user= new UserModel({
        userId:req.body.userId,
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword,
        userLocation :req.body.userLocation,
        userLanguage :req.body.userLanguage,
        userBalance :req.body.userBalance,
        
    });

    await user.save().then(data =>{
        res.send({
            message: "User Added Successfully",
            user : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "User Not Added Successfully",
        });
    });
}; //end of create user

exports.findAll = async (req,res) =>{
    try{
        const users = await UserModel.find();
        res.status(200).json(users);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await UserModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`User not found`});
        }else{
            res.status(200).json({message:`User found and deleted`});
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

    await UserModel.findByIdAndUpdate(id,req.body,{ userFindAndModify : false})
                                    .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`User not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};