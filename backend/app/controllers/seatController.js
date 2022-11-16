const SeatModel = require('../model/seatModel');

//create and save a new user

exports.create = async (req, res) => {
   /*  if(!req.body.audiId){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }
    */ if (!req.body.row && !req.body.col && !req.body.seatname && !req.body.occupied) {
        res.status(400).send({ message: "Content ALL cannot be empty!!!" });
    }

    const seat = new SeatModel({
        row: req.body.row,
        col: req.body.col,
        seatname: req.body.seatname,
        occupied: req.body.occupied,


    });

    await seat.save().then(data => {
        res.send({
            message: "Seat Added Successfully",
            seat: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Seat Not Added Successfully",
        });
    });
}; //end of create user

exports.findAll = async (req, res) => {
    try {
        const seats = await SeatModel.find();
        res.status(200).json(seats);
    } catch {
        res.status(404).json({ message: error.message })
    }
}

//Retreive a single user with an id
exports.findOne = async (req, res) => {
    try {
        const seat = await SeatModel.findById(req.params.id);
        res.status(200).json(theatre);
    } catch {
        res.status(404).json({ message: error.message })
    }
}

//delete user by id
exports.destroy = async (req, res) => {
    await SeatModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).json({ message: `Seat not found` });
        } else {
            res.status(200).json({ message: `Seat found and deleted` });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//update user by id 

exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data to update cannot be empty!!!" });
    }

    const id = req.params.id;

    await SeatModel.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Seat not found` });
            } else {
                res.send({ message: "Data updated successfully!!!" })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};