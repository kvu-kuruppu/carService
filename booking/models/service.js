const mongoose = require('mongoose');

const Service = mongoose.model('Service', {
    name: {
        type: String,
        required:true
    },
    mobile: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    vehicleNo: {
        type: String,
        required:true
    },
    vehicleModel: {
        type: String,
        required:true
    },
    servType: {
        type: String,
        required: true

    },
    dateServ: {
        type: Date,
        required:true
    },
    timeSlot: {
        type: String,
        required:true
    },
    comments: {
        type: String
    }
});

module.exports = { Service }