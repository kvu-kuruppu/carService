const express = require('express');
const router = express.Router();

const { Service } = require("../models/service");

//ADD A NEW BOOKING
router.post('/api/service/add', (req, res) => {
    const service = new Service({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        vehicleNo: req.body.vehicleNo,
        vehicleModel: req.body.vehicleModel,
        servType: req.body.servType,
        dateServ: req.body.dateServ,
        timeSlot: req.body.timeSlot,
        comments: req.body.comments        
    });

    console.log(service.name);

    service.save((err, data) => {
        res.status(200).json({ code:200, message:'Employee added successfully', addEmployee:data });
        console.log('kkkkkkk');
    });
});

//GET ALL BOOKINGS
router.get('/api/service/get', (req, res) => {
    Service.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            res = 00;
        }
    });
});

//GET BOOKING BY DATE
router.get('/api/service/getdate/:dateServ/:timeSlot', (req, res) => {
    var timslot = {
        dateServ : req.params.dateServ,
        timeSlot : req.params.timeSlot
    }

    console.log(timslot.dateServ);

    Service.find(timslot, (err, data) => {
        if(!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    });
});

module.exports = router;