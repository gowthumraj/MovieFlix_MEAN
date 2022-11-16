const express = require('express')
    const App = require("../controllers/audiController.js")
    const router =  express.Router();


    router.post('/create',App.create)
    router.get('/getAll',App.findAll)
    router.get('/findone/:audiId',App.findOne)
    router.put('/update/:id',App.update)
    router.delete('/delete/:id',App.destroy)
module.exports = router
