const express = require('express');
const router = express.Router();

const { Tyre } = require('../models/tyre');

//GET ALL
router.get('/api/tyres', (req, res) => {
    Tyre.find({}, (err,data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/tyre/find/:width/:rim', (req, res) => {
    var wid = {
        width: req.params.width,
        rim: req.params.rim
    }
    Tyre.find(wid, (err,data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;