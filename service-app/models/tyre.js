const mongoose = require('mongoose');

const Tyre = mongoose.model('Tyre', {
    name: {
        type: String,
        required:true
    },
    width: {
        type: String,
        required:true
    },
    aspectRatio: {
        type: String,
        required:true
    },
    rim: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    }
});

module.exports = { Tyre }