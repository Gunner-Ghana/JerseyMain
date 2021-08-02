const mongoose = require('mongoose');


const kitSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    year : {
        type: String,
        required: true
    },
    kitType : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    path : {
        type: String,
        required: true
    },
    
    brand : {
        type: String,
        required: true
    },
    level : {
        type: String,
        required: true
    }

},{timestamps: true})

const Kit = mongoose.model('Kit',kitSchema);
module.exports ={Kit};