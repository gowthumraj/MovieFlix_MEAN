const AdminModel = require('../model/adminModel');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.adminId && !req.body.adminPassword){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const admin = new AdminModel({
        adminId:req.body.adminId,
        adminPassword :req.body.adminPassword,
       
    });

    await admin.save().then(data =>{
        res.send({
            message: "Admin Added Successfully",
            admin : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Admin Not Added Successfully",
        });
    });
}; //end of create user

exports.findAll = async (req,res) =>{
    try{
        const admins = await AdminModel.find();
        res.status(200).json(admins);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const admin = await AdminModel.findById(req.params.id);
        res.status(200).json(admin);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await AdminModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`Admin not found`});
        }else{
            res.status(200).json({message:`Admin found and deleted`});
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

    await AdminModel.findByIdAndUpdate(id,req.body,{ userFindAndModify : false})
                                    .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`Admin not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};