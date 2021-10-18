const mongoose = require('mongoose')

const CRUDschema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    },
    pass: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('database',CRUDschema)