
const HistoryModel = require('../model/historyModel');

//create and save a new history

exports.create = async (req, res) => {
    /* if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
         res.status(400).send({message:"Content cannot be empty!!!"});
     }*/

    const history = new HistoryModel({
        historyId: req.body.historyId,
        movieName: req.body.movieName,
        theatreName: req.body.theatreName,
        amountPaid: req.body.amountPaid,
        userName: req.body.userName,
        

    });

    await history.save().then(data => {
        res.send({
            message: "History Added Successfully",
            history: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "History Not Added Successfully",
        });
    });
}; //end of create history

//Retrieve all historys from the database
exports.findAll = async (req, res) => {
    try {
        const historys = await HistoryModel.find();
        res.status(200).json(historys);
    } catch {
        res.status(404).json({ message: error.message })
    }
}

//Retreive a single history with an id

exports.findOne = async (req, res) => {
    try {
        const history = await HistoryModel.findById(req.params.id);
        res.status(200).json(history);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};


//delete history by id
exports.destroy = async (req, res) => {
    await HistoryModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).json({ message: `History not found` });
        } else {
            res.status(200).json({ message: `History found and deleted` });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//update history by id 

exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data to update cannot be empty!!!" });
    }

    const historyId = req.params.id;

    await HistoryModel.findByIdAndUpdate(historyId, req.body, { historyFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `History not found` });
            } else {
                res.send({ message: "Data updated successfully!!!" })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};